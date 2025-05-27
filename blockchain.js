import { ethers } from "ethers";
import AgriTraceABI from "../abis/AgriTrace.json";

const CONTRACT_ADDRESS = "<DEPLOYED_CONTRACT_ADDRESS_HERE>";

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, AgriTraceABI.abi, signer);
};
