import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Ticket from "../images/ticket.png";
import axios from "axios";

const Container = styled.div`
  height: 400px;
  width: 500px;
  background-color: #131312;
  align-items: center;
  margin: 0 35%;
`;

const Name = styled.h1``;

const Id = styled.h1``;

const Confirm = styled.button`
  text-decoration: none;
  height: 40px;
  width: 100px;
  border-radius: 50px;
  color: black;

  border: 1px solid white;
  display: grid;
  align-content: center;
  justify-content: space-around;
  margin: 0px 5px;
  transition: 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #25b04a;
  }
`;

var OName = "Sanchit";
var NftId = "6969";

const Organizers = ({ account }) => {
  // A custom hook that builds on useLocation to parse
  // the query string for you.
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const confirmScan = async () => {
    try {
      const url = "https://nft-ticket.herokuapp.com/api/scannedToken/add";
      const scannedToken = {
        tokenId: query.get("tokenId"),
        ownerAddress: query.get("ownerAddress"),
        organizerId: 101,
      };
      console.log(scannedToken);
      const res = await axios.post(url, scannedToken);
      console.log(res);
      console.log("scanned token succesfully added");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <Name> Scanner Person : {OName} </Name>
        <Name> Owner Address : {query.get("ownerAddress")} </Name>
        <Id> NFT ID : {query.get("tokenId")} </Id>
        <Confirm onClick={confirmScan}> Confirm </Confirm>
      </Container>
    </>
  );
};

export default Organizers;
