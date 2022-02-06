import web3 from "./web3";
import abi from "./build/JorrTokenAbi.json";
// import abi from "./build/JorrTokenTestAbi.json";

// const web3 = require("./web3");
// const abi = require("./build/JorrTokenAbi.json");

const JorrToken = new web3.eth.Contract(
  abi,
  "0x0463E2FED074C5F6736C28a856F4efD05ADA1B8f" // mumbai
);

export default JorrToken;
// module.exports = JorrToken;
