import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../../redux/blockchain/blockchainActions";
import { fetchData } from "../../../redux/data/dataActions";
import { isAndroid, isIOS } from "react-device-detect"
import { ConnectButtonStyle } from './ConnectButton.style'
import { Button, Icon } from 'components/UIKit/index'

const fixImpreciseNumber = (number) => {
  return (parseFloat(number.toPrecision(12)));
}

const ConnectButton = ({onWalletConnect = () => {}, address, id}) => {
  const [walletConnected, setWalletConnected] = useState(false)
  const [fallback, setFallback] = useState('')
  const [mintCount, setMintCount] = useState(1)
  const [maxMintCount, setMaxMintCount] = useState(1) //comment if you need static maxMintCount
  const [connectingMobile, setConnectingMobile] = useState(false)
  const [disableMint, setDisableMint] = useState(false)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const blockchain = useSelector((state) => state.blockchain)

  const minMintCount = 1

  // uncomment if you need static maxMintCount
  // const maxMintCount = 5

  const errorMessages = [
    'Change network to Polygon.',
    'Something went wrong.'
  ]
  const metamaskError = 'Install Metamask.'

  useEffect(() => {
    setConnectingMobile(true)

    setFallback('')
    if (blockchain.errorMsg && errorMessages.includes(blockchain.errorMsg)) {
      setFallback(blockchain.errorMsg)
    }
    if(blockchain.errorMsg === metamaskError && !(isIOS || isAndroid)) {
      window.location.replace(`https://metamask.app.link/dapp/celebrium.netlify.app/collection/${id}`)
    }
  }, [blockchain.errorMsg])

  useEffect(async () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      const isMintActive = await blockchain.smartContract.methods.isMintActive().call()
      const isPreSaleMintActive = await blockchain.smartContract.methods.isPreSaleMintActive().call()
      const mintPrice = isMintActive ? await blockchain.smartContract.methods?.mintPrice().call() / 10 ** 18
        : isPreSaleMintActive ? await blockchain.smartContract.methods?.preSaleMintPrice().call() / 10 ** 18 : 0
      dispatch(fetchData(blockchain.account));
      if (blockchain.account) {
        setWalletConnected(true)
        onWalletConnect()
        const maxMint = await blockchain.smartContract.methods.maximumAllowedTokensPerWallet().call()
        const maxPreSaleMint = await blockchain.smartContract.methods.allowListMaxMint().call()
        const isMintActive = await blockchain.smartContract.methods.isMintActive().call()
        const isPreSaleMintActive = await blockchain.smartContract.methods.isPreSaleMintActive().call()

        //comment if you need static maxMintCount
        if(isMintActive) {
          setMaxMintCount(maxMint)
        }
        if(isPreSaleMintActive) {
          setMaxMintCount(maxPreSaleMint)
        }
        //end
      }

    }
  }, [blockchain.smartContract, dispatch]);

  const normalizeMintCount = count =>
    count > maxMintCount
      ? maxMintCount
      : count < minMintCount
        ? minMintCount
        : count

  const claimNFTs = async (_amount) => {
    setLoading(true)
    const isMintActive = await blockchain.smartContract.methods.isMintActive().call()
    const isPreSaleMintActive = await blockchain.smartContract.methods.isPreSaleMintActive().call()
    const address = await blockchain.account
    const isWhitelisted = await blockchain.smartContract.methods.checkIfOnAllowList(address).call()
    const alreadyMintedCount = await blockchain.smartContract.methods.allowListClaimedBy(address).call()


    const mint = isMintActive ? blockchain.smartContract.methods.mint(_amount)
      : isPreSaleMintActive ? blockchain.smartContract.methods.preSaleMint(_amount)
        : null;


    if (mint) {
      const mintPrice = isMintActive ? await blockchain.smartContract.methods?.mintPrice().call() / 10 ** 18
        : isPreSaleMintActive ? await blockchain.smartContract.methods?.preSaleMintPrice().call() / 10 ** 18 : 0

      const balance = await blockchain.web3.eth.getBalance(blockchain.account, async (err, result) => {
        return  blockchain.web3.utils.fromWei(result, "ether")
      })
      const roundedBalance = balance / 10 ** 18
      if(roundedBalance < fixImpreciseNumber(_amount * mintPrice)) {
        setLoading(false)
        return setFallback(`You don’t have enough funds to mint! Please, make sure to have ${fixImpreciseNumber(_amount * mintPrice)} MATIC + gas.`)
      }
      if(isPreSaleMintActive) {
        setLoading(false)
        if(!isWhitelisted) {
          return setFallback('Unfortunately, you are not whitelisted.')
        }
        if(alreadyMintedCount >= maxMintCount) {
          return setFallback('This wallet has reached the transaction limit.')
        }
      }
      if(roundedBalance)
        setLoading(false)
      mint.send({
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(fixImpreciseNumber(mintPrice * _amount).toString(), "ether")

      }).once("error", (err) => {
        if (err.code === -32000 || err.code === '-32000') {
          setFallback('Insufficient funds, please add funds to your wallet and try again')
        } else {
          setFallback('Sorry, something went wrong please try again')
        }
      }).then(receipt => {
        // window.location.replace('/success')
      });
    } else {
      setLoading(false)
      setFallback('The mint is not open yet.')
    }
  }

  const openMobileMetamask = () => {
    if(typeof window.ethereum === 'undefined') {
      if (connectingMobile && !walletConnected && (isIOS || isAndroid)
        || blockchain.errorMsg === metamaskError) {

        window.location.replace(`https://metamask.app.link/dapp/celebrium.netlify.app/collection/${id}`)

      }
    }


  }

  return (
    <>
      {walletConnected ? (
        <ConnectButtonStyle>
          <div className='mint-content'>
            <div className="mint-input">
              <button
                onClick={() => setMintCount(normalizeMintCount(mintCount - 1))}
                disabled={minMintCount == mintCount}
                className="btn-minus"
              >
                <Icon name="minus" color="black"/>
              </button>

              <input value={mintCount} type='number' onChange={e => setMintCount(+e.target.value)} />

              <button
                onClick={() => setMintCount(normalizeMintCount(mintCount + 1))}
                disabled={maxMintCount == mintCount}
                className="btn-plus"
              >
                <Icon name="plus" color="black"/>
              </button>
            </div>

            <Button
              onClick={e => {
                e.preventDefault();
                setFallback('');
                claimNFTs(mintCount);
              }}
              variant="gold"
            >
              MINT NOW
            </Button>
          </div>
          {fallback && <p className="warn-text">{fallback}</p>}
        </ConnectButtonStyle>

      ) : (
        <>
          <Button
            onClick={e => {
              e.preventDefault();
              dispatch(connect(address));
              openMobileMetamask();
            }}
            variant="secondary"
          >
            BUY WITH CRYPTO
          </Button>
          {fallback && <p className="warn-text">{fallback}</p>}
        </>

      )}
    </>
  );
}

export default ConnectButton;




