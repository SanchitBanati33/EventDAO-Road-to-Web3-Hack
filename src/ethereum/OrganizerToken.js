import web3 from "./web3";
import abi from "./build/OrganizerAbi.json";

const OrganizerToken = new web3.eth.Contract(
  abi,
  "0x4fa53AB90f36aFdBe8Ac44cE52872500FA41Fd71" // mumbai
);

export default OrganizerToken;
