// SPDX-License-Identifier: MIT
// Made by: NFT Stack
//          https://nftstack.info
//

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Celebrium is ERC721Enumerable, Ownable {
  uint256 public mintPrice = 42 ether;
  uint256 public preSaleMintPrice = 42 ether;

  uint256 public mintBreakPoint = 140;

  uint256 private reserveAtATime = 50;
  uint256 private reservedCount = 0;
  uint256 private maxReserveCount = 50;

  string _baseTokenURI;

  bool public isMintActive = false;
  bool public isPreSaleMintActive = false;
  bool public isClosedMintForever = false;

  uint256 public maximumMintSupply = 500;
  uint256 public maximumAllowedTokensPerPurchase = 500;
  uint256 public maximumAllowedTokensPerWallet = 500;
  uint256 public allowListMaxMint = 500;

  address private OtherAddress1 = 0x625b0a3F8cEe1e03760d7fc10Aa9336FBDcF0f86;
  address private OtherAddress2 = 0x86D7a3a03F00a51fEE2D54C6231Ed38D9820CBe4;

  mapping(address => bool) private _allowList;
  mapping(address => uint256) private _allowListClaimed;

  event AssetMinted(uint256 tokenId, address sender);
  event SaleActivation(bool isMintActive);

  constructor(string memory baseURI) ERC721("Celebrium Genesis Collection Alpha: Jenny McCarthy", "CELEBRIUM") {
    setBaseURI(baseURI);
  }

  modifier saleIsOpen {
    require(totalSupply() <= maximumMintSupply, "Sale has ended.");
    _;
  }

  modifier onlyAuthorized() {
    require(owner() == msg.sender);
    _;
  }

  function setMaximumAllowedTokens(uint256 _count) public onlyAuthorized {
    maximumAllowedTokensPerPurchase = _count;
  }

  function setMaximumAllowedTokensPerWallet(uint256 _count) public onlyAuthorized {
    maximumAllowedTokensPerWallet = _count;
  }

  function setMintActive(bool val) public onlyAuthorized {
    isMintActive = val;
    emit SaleActivation(val);
  }

  function setMaxMintSupply(uint256 maxMintSupply) external  onlyAuthorized {
    maximumMintSupply = maxMintSupply;
  }

  function setIsPreSaleMintActive(bool _isPreSaleMintActive) external onlyAuthorized {
    isPreSaleMintActive = _isPreSaleMintActive;
  }

  function setAllowListMaxMint(uint256 maxMint) external  onlyAuthorized {
    allowListMaxMint = maxMint;
  }

  function addToAllowList(address[] calldata addresses) external onlyAuthorized {
    for (uint256 i = 0; i < addresses.length; i++) {
      require(addresses[i] != address(0), "Can't add a null address");
      _allowList[addresses[i]] = true;
      _allowListClaimed[addresses[i]] > 0 ? _allowListClaimed[addresses[i]] : 0;
    }
  }

  function checkIfOnAllowList(address addr) external view returns (bool) {
    return _allowList[addr];
  }

  function removeFromAllowList(address[] calldata addresses) external onlyAuthorized {
    for (uint256 i = 0; i < addresses.length; i++) {
      require(addresses[i] != address(0), "Can't add a null address");
      _allowList[addresses[i]] = false;
    }
  }

  function allowListClaimedBy(address owner) external view returns (uint256){
    require(owner != address(0), 'Zero address not on Allow List');
    return _allowListClaimed[owner];
  }

  function setReserveAtATime(uint256 val) public onlyAuthorized {
    reserveAtATime = val;
  }

  function setMaxReserve(uint256 val) public onlyAuthorized {
    maxReserveCount = val;
  }

  function setMintPrice(uint256 _price) public onlyAuthorized {
    mintPrice = _price;
  }

  function setPreSaleMintPrice(uint256 _price) public onlyAuthorized {
    preSaleMintPrice = _price;
  }

  function setBaseURI(string memory baseURI) public onlyAuthorized {
    _baseTokenURI = baseURI;
  }

  function getMaximumAllowedTokens() public view onlyAuthorized returns (uint256) {
    return maximumAllowedTokensPerPurchase;
  }

  function getMintPrice() external view returns (uint256) {
    return mintPrice;
  }

  function getPreSaleMintPrice() external view returns (uint256) {
    return preSaleMintPrice;
  }

  function getIsClosedMintForever() external view returns (bool) {
    return isClosedMintForever;
  }

  function setIsClosedMintForever() external onlyAuthorized {
    isClosedMintForever = true;
  }

  function getReserveAtATime() external view returns (uint256) {
    return reserveAtATime;
  }

  function getTotalSupply() external view returns (uint256) {
    return totalSupply();
  }

  function getContractOwner() public view returns (address) {
    return owner();
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }

  function reserveNft() public onlyAuthorized {
    require(reservedCount <= maxReserveCount, "Max Reserves taken already!");
    uint256 supply = totalSupply();
    uint256 i;

    for (i = 1; i <= reserveAtATime; i++) {
      emit AssetMinted(supply + i, msg.sender);
      _safeMint(msg.sender, supply + i);
      reservedCount++;
    }
  }

  function reserveToCustomWallet(address _walletAddress, uint256 _count) public onlyAuthorized {
    require(reservedCount <= maxReserveCount, "Max Reserves taken already!");

    uint256 supply = totalSupply();
    uint256 i;

    for (i = 1; i <= _count; i++) {
      emit AssetMinted(supply + i, _walletAddress);
      _safeMint(_walletAddress, totalSupply());
    }
  }

  function mint(uint256 _count) public payable saleIsOpen {
    if (msg.sender != owner()) {
      require(isMintActive, "Sale is not active currently.");
    }

    require(totalSupply() + _count <= maximumMintSupply, "Total supply exceeded.");
    require(totalSupply() <= maximumMintSupply, "Total supply spent.");
    require(!isClosedMintForever, "Mint Closed Forever");

    require(msg.value >= mintPrice * _count, "Insuffient ETH amount sent.");

    if(totalSupply() + _count == mintBreakPoint) {
      mintPrice = 58 ether;
    }

    uint256 supply = totalSupply();
    uint256 i;

    for (i = 1; i <= _count; i++) {
      emit AssetMinted(supply + i, msg.sender);
      _safeMint(msg.sender, supply + i);
    }
  }

  function preSaleMint(uint256 _count) public payable saleIsOpen {
    require(isPreSaleMintActive, 'Pre Sale Mint is not active');
    require(_allowList[msg.sender], 'You are not on the Allow List');
    require(totalSupply() < maximumMintSupply, 'All tokens have been minted');
    require(_count <= allowListMaxMint, 'Cannot purchase this many tokens');
    require(_allowListClaimed[msg.sender] + _count <= allowListMaxMint, 'Purchase exceeds max allowed');
    require(msg.value >= preSaleMintPrice * _count, 'Insuffient ETH amount sent.');
    require(!isClosedMintForever, 'Mint Closed Forever');

    for (uint256 i = 0; i < _count; i++) {
      _allowListClaimed[msg.sender] += 1;
      emit AssetMinted(totalSupply(), msg.sender);
      _mint(msg.sender, totalSupply());
    }
  }

  function walletOfOwner(address _owner) external view returns(uint256[] memory) {
    uint tokenCount = balanceOf(_owner);
    uint256[] memory tokensId = new uint256[](tokenCount);

    for(uint i = 0; i < tokenCount; i++){
      tokensId[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokensId;
  }

  function withdraw() external onlyAuthorized {
    uint balance = address(this).balance;
    payable(OtherAddress1).transfer(balance * 8000 / 10000);
    payable(OtherAddress2).transfer(balance * 2000 / 10000);
    payable(owner()).transfer(balance * 0 / 10000);
  }
}