import React, { useEffect } from 'react'
import Header from '../components/UIKit/Header/Header'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/UIKit/Footer/Footer'
import { Button } from '../components/UIKit'
import MintCard from '../components/CollectionView/MintCard/MintCard'
import Content from '../components/CollectionView/Content/Content'
import { dataCollection } from 'components/CollectionView/data-collection'
import {clearState} from "../redux/blockchain/blockchainActions";
import {useDispatch} from "react-redux";

function CollectionView(props) {
  const { id } = useParams()
  const pageData = dataCollection[id]
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo({ top: 0, });
  }, [])

  useEffect(() => {
    return () => {
      dispatch(clearState())
    };
  }, [])


  return (
    <>
      <Header/>

      <div className="collection-wrapper">
        <div className="back-wrapper">
          <div className="container">
            <div className="content">
              <Link to="/">
                <Button iconName="arrow-back" variant="secondary" >
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <MintCard {...pageData.mintCard} />

        <Content {...pageData.content}/>

        <Footer />
      </div>
    </>
  )
}

export default CollectionView
