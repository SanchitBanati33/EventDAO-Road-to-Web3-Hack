import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Tickets from "./components/Pages/Tickets";
import Organizers from "./components/Pages/Organizers";

import Web3Modal from "web3modal";
import web3 from "./ethereum/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

import NFTTicket from "./ethereum/NFTTicket";
import ErrorPage from "./components/ErrorPage";
const axios = require("axios");

const infuraId = "97c2d52095a84da7a0b710a8daa16acf";
// // "https://rinkeby.infura.io/v3/97c2d52095a84da7a0b710a8daa16acf";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        1: `https://mainnet.infura.io/v3/${infuraId}`,
        4: `https://rinkeby.infura.io/v3/${infuraId}`,
        // 137: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_KEY}`,
        80001:
          "https://polygon-mumbai.g.alchemy.com/v2/ACUeLJ1FpSjia-iomEar1cBhZo3TU4Ad",
      },
    },
  },
};

const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

let provider;

const changeNetwork = async () => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    // console.log("switch network:", { chainId: "0x1" });
    await window.ethereum.request({
      // method: "wallet_addEthereumChain",
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: "0x13881",
        },
      ],
    });
  } catch (err) {
    if (err) console.log(err.message);
  }
};

const App = () => {
  const [account, setaccount] = useState("");
  const [chainId, setChainId] = useState();
  const [haveTokens, setHaveTokens] = useState(false);
  const [ticketsData, setTicketsData] = useState([]);

  const networkChanged = (chainId) => {
    console.log({ chainId });
    setChainId(chainId);
  };

  useEffect(() => {
    try {
      window.ethereum.on("chainChanged", networkChanged);
    } catch (err) {
      if (err) console.log(err);
    }

    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);

  useEffect(() => {
    changeNetwork();
  }, [chainId]);

  const onConnectWallet = async () => {
    console.log("connecting wallet...");
    console.log("cached provider", web3Modal.cachedProvider);
    try {
      provider = await web3Modal.connect();
    } catch (err) {
      console.log("Could not get a wallet connection", err);
      return;
    }
    web3.setProvider(provider);
    const accounts = await web3.eth.getAccounts();
    setaccount(accounts[0]);
  };

  const onDisconnect = async (e) => {
    e.preventDefault();

    console.log(
      "cached provider before provider.close(): ",
      web3Modal.cachedProvider
    );
    console.log("Killing the session", web3.currentProvider);
    console.log("web3.givenProvider", web3.givenProvider);

    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    console.log(
      "cached provider after provider.close(): ",
      web3Modal.cachedProvider
    );
    web3Modal.clearCachedProvider();
    console.log("cached provider after clear: ", web3Modal.cachedProvider);
    provider = null;
    setaccount("");
    setHaveTokens(false);
    window.location.reload();
  };

  const run = async () => {
    try {
      const userAddress = account;
      console.log("user address: ", userAddress);
      // "0x6ff9c8ed337de934e46e773f61a1a3369617c3ce";
      //   "0x5908bfd84673974ddb8b6688501a53ac5fc92b6b";
      const balance = await NFTTicket.methods
        .balanceOf(userAddress.toString())
        .call();

      console.log("NFT Ticket token balance: ", balance);

      if (balance > 0) setHaveTokens(true);

      let ticketsData = [];

      for (let i = 0; i < balance; i++) {
        const tokenId = await NFTTicket.methods
          .tokenOfOwnerByIndex(userAddress, i)
          .call();

        const nftTicketContractAddress =
          "0x0463E2FED074C5F6736C28a856F4efD05ADA1B8f";
        const chainid = "80001"; // mumbai
        const url = `https://api.covalenthq.com/v1/${chainid}/tokens/${nftTicketContractAddress}/nft_metadata/${tokenId}/?key=ckey_docs`;
        const { data } = await axios.get(url);
        let nftData;
        if (data.data?.items[0].nft_data) {
          console.log(data.data?.items[0].nft_data[0].external_data);
          nftData = data.data?.items[0].nft_data[0].external_data;
        }

        ticketsData.push({
          tokenId: tokenId,
          image: nftData?.image,
        });

        // console.log(data?.data.items[0].nft_data[0].external_data);
      }
      setTicketsData(ticketsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    run();
  }, [account, chainId]);

  useEffect(() => {
    async function listenMMAccount() {
      try {
        window.ethereum.on("accountsChanged", async function () {
          // Time to reload your interface with accounts[0]!
          const accounts = await web3.eth.getAccounts();
          setaccount(accounts[0]);
          // accounts = await web3.eth.getAccounts();
          console.log(accounts);
          // run();
          window.location.reload();
        });
      } catch (err) {
        console.log("Browser wallet not installed!");
      }
    }

    listenMMAccount();
  }, []);

  useEffect(() => {
    // alert("Connect to the Rinkeby testnet!");
    onConnectWallet();
  }, []);

  return (
    <div>
      <Header
        account={account}
        onConnectWallet={onConnectWallet}
        onDisconnect={onDisconnect}
      />
      <Switch>
        <Route
          exact
          path="/tickets"
          component={() => (
            <Tickets
              account={account}
              haveTokens={haveTokens}
              ticketsData={ticketsData}
            />
          )}
        />
        {/* <Route
          exact
          path="/tickets/:tokenId"
          component={() => (
            <Tickets
              account={account}
              haveTokens={haveTokens}
              tokenIds={tokenIds}
            />
          )}
        /> */}
        <Route
          exact
          path="/organizers"
          component={() => (
            <Organizers account={account} haveTokens={haveTokens} />
          )}
        />
        <Route
          path="*"
          component={() => <ErrorPage text={"404 NOT FOUND"} />}
        />
      </Switch>
    </div>
  );
};

export default App;
