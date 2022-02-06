import web3 from "./web3";
import abi from "./build/NFTTicketAbi.json";

const NFTTicket = new web3.eth.Contract(
  abi,
  "0x0463E2FED074C5F6736C28a856F4efD05ADA1B8f" // mumbai
);

export default NFTTicket;
// module.exports = JorrToken;
