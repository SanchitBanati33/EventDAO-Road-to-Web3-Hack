import React from "react";
import styled from "styled-components";
import Ticket from "../images/Organizer.png";
import QR from "../images/QR.png";
import QRCode from "react-qr-code";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0 0 0 150px;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  height: 330px;
  width: 250px;
  border: solid 2px white;
  border-radius: 5%;
  color: white;
  margin: 30px 0 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  height: 250px;
  width: 200px;
`;

const Img = styled.div`
  padding-right: 0;
  border: 1px;
  width: 100% !important;
  /* height: 280px; */
  width: auto;
  margin: 0px 0 0 0px;
  justify-content: center;
  /* vertical-align: middle; */
  display: block;
  position: relative;
  border-radius: 5%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
const Title = styled.h1`
  margin: 0 8%;
  color: blue;
  text-align: center;
  margin-bottom: 20px;
`;

const PopUp = styled.div`
  height: 400px;
  width: 500px;
  background-color: white;
  border: solid 2px yellow;
  border-radius: 5%;
  padding: 20px 0 0 0;
  display: grid;
  align-content: center;
  justify-items: center;
`;

const Generate = styled.button`
  text-decoration: none;
  height: 40px;
  width: 100px;
  border-radius: 50px;
  color: black;

  border: 1px solid white;
  display: grid;
  align-content: center;
  text-align: center;
  justify-content: space-around;
  margin: 15px 0px 0 200px;
  transition: 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #25b04a;
  }

  &.selected {
    background-color: #25b04a;
    transform: scale(1.1);
  }
`;

const QrCode = styled.div``;

const Tickets = ({ ticketsData, account }) => {
  return (
    <>
      <Grid>
        {ticketsData.map((ticket) => {
          return (
            <>
              <Container key={ticket.tokenId}>
                <ImgWrapper>
                  {/* <Img src={Ticket} /> */}
                  <img src={ticket.image} height="250px" border-radius="5%" />
                </ImgWrapper>
                <Title> Ticket #{ticket.tokenId} </Title>
              </Container>
              <PopUp>
                <Title> Get your QR Code </Title>
                {/* <Generate> Generate </Generate> */}
                {/* <img src={QR} height="250px" border-radius="5%" /> */}
                <QRCode
                  value={`http://localhost:3001/Organizers?tokenId=${ticket.tokenId}&ownerAddress=${account}`}
                />
              </PopUp>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Tickets;
