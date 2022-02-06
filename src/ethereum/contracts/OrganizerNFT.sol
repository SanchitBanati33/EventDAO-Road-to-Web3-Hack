pragma solidity >=0.6.0 <0.7.0;
//SPDX-License-Identifier: MIT

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.2.0/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.2.0/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.2.0/contracts/access/Ownable.sol";

//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

contract OrganizerNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public ERC721("OrganizerNFT", "ORGT") {
        _setBaseURI("https://ipfs.io/ipfs/");
    }

    function setTokenUri(uint256 _tokenId, string memory _tokenUri)
        public
        onlyOwner
    {
        _setTokenURI(_tokenId, _tokenUri);
    }

    function mintItem(address to)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _mint(to, id);
        _setTokenURI(id, "QmY1SCM3cLGZ8kgu1yhjffurV8NtTzNaptB5x8CZp5wAZ9");

        return id;
    }
}
