import React from "react";
import styled from "styled-components";
import Ticket from "../images/ticket.png";

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
`;

const Tickets = () => {
  return (
    <>
      <Grid>
        <Container>
          <ImgWrapper>
            <Img src={Ticket} />
            {/* <img src={Ticket}  height="250px" border-radius="5px"/> */}
          </ImgWrapper>
          <Title> Ticket #6808 </Title>
        </Container>

        <Container>
          <ImgWrapper>
            <Img src={Ticket} />
            {/* <img src={Ticket}  height="250px" border-radius="5px"/> */}
          </ImgWrapper>
          <Title> Ticket #6808 </Title>
        </Container>

        <Container>
          <ImgWrapper>
            <Img src={Ticket} />
            {/* <img src={Ticket}  height="250px" border-radius="5px"/> */}
          </ImgWrapper>
          <Title> Ticket #6808 </Title>
        </Container>

        <Container>
          <ImgWrapper>
            <Img src={Ticket} />
            {/* <img src={Ticket}  height="250px" border-radius="5px"/> */}
          </ImgWrapper>
          <Title> Ticket #6808 </Title>
        </Container>

        <Container>
          <ImgWrapper>
            <Img src={Ticket} />
            {/* <img src={Ticket}  height="250px" border-radius="5px"/> */}
          </ImgWrapper>
          <Title> Ticket #6808 </Title>
        </Container>
      </Grid>
    </>
  );
};

export default Tickets;
