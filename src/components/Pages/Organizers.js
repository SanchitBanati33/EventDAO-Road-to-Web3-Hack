import React from 'react';
import styled from "styled-components";
import Ticket from "../images/ticket.png"
const Container = styled.div`
    height: 400px;
    width: 500px; 
    background-color:#131312;
    align-items:center;
    margin: 0 35%;
    
`; 

const Name = styled.h1`

`;

const Id = styled.h1`

`;

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

const Organizers = () => {
  return (
      <>
      <Container>
          <Name> Scanner Person : {OName} </Name>
          <Id> NFT ID : {NftId} </Id>
          <Confirm> Confirm </Confirm>
      </Container>

      </>
  );
};

export default Organizers;
