const hre = require("hardhat");

async function main() {
  const AgriTrace = await hre.ethers.getContractFactory("AgriTrace");
  const contract = await AgriTrace.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
