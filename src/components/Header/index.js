import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: fit-content;
  padding: 12px;
  background-color: #131312;

  border-bottom: 1px solid #434243;
  top: 0;
  position: sticky;
  z-index: 100;
`;

const Logo = styled.div`
  top: 0;
  left: 0;
  padding: 0px 10px;
  color: white;
  font-weight: bold;
`;

const HeaderFields = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  padding: 0px 10px;
  margin: 0 0 0 150px;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  height: 40px;
  width: 100px;
  border-radius: 50px;
  color: white;

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

  &.selected {
    background-color: #25b04a;
    transform: scale(1.1);
  }
`;

const Wallet = styled.div`
  height: 50px;
  min-width: 200px;
  border-radius: 50px;
  color: white;

  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  transition: 0.7s ease-in-out;
  gap: 15px;

  top: 0;
  right: 10;
  position: inherit;
  padding: 0px 15px;
  margin-right: 50px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #25b04a;
  }
`;

const Disconnect = styled(Wallet)`
  &:hover h3 span {
    display: none;
  }
  &:hover img {
    display: none;
  }
  &:hover h3:after {
    content: "Disconnect";
    justify-self: center;
  }
`;

const Header = ({ account, onConnectWallet, onDisconnect }) => {
  const userAddress = account
    ? account.slice(0, 6) + "...." + account.slice(-4)
    : null;
  return (
    <>
      <HeaderContainer>
        <Logo>
          <h2>EventDAO</h2>
        </Logo>

        <HeaderFields>
          <Item exact to="/" activeClassName="selected">
            <h4>Home</h4>
          </Item>

          <Item exact to="/Tickets" activeClassName="selected">
            <h4>Tickets </h4>
          </Item>

          <Item exact to="/Organizers" activeClassName="selected">
            <h4> Organizers </h4>
          </Item>
        </HeaderFields>

        {account === "" || typeof account === "undefined" ? (
          <Wallet onClick={onConnectWallet}>
            <h3>Connect Wallet</h3>
          </Wallet>
        ) : (
          <Disconnect onClick={onDisconnect}>
            <h3>
              <span>{userAddress}</span>
            </h3>
          </Disconnect>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
