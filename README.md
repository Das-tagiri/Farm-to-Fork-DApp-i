# Farm-to-Fork DApp

**Farm-to-Fork DApp** is a blockchain-based decentralized application designed to enhance transparency and traceability in the agricultural supply chain. By leveraging Ethereum smart contracts, IPFS, and Web3 technologies, the platform allows farmers to securely record crop information and origin details, while transporters and retailers can update product status at each stage. Consumers can easily verify the complete journey of their food by scanning QR codes, ensuring authenticity and safety from farm to table. This solution empowers stakeholders with immutable data, reduces fraud, and promotes trust across the agricultural ecosystem.

## Features

- Record crop details securely on the Ethereum blockchain
- Update transport and retail status for supply chain transparency
- Generate QR codes for consumers to track products
- Store additional documents securely on IPFS
- Simple ReactJS frontend with Web3 integration

## Technologies Used

- Solidity (Smart Contract)
- Ethereum Blockchain (Hardhat for local development)
- IPFS (for decentralized document storage)
- ReactJS (Frontend)
- Ethers.js (Blockchain interaction)
- QR Code generation

## Getting Started

### Prerequisites

- Node.js and npm installed
- MetaMask or other Ethereum wallet browser extension
- Git installed

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Das-tagiri/farm-to-fork-dapp.git
cd farm-to-fork-dapp
2.Install dependencies:

npm install
3.Compile and deploy smart contract (local Hardhat network):

npx hardhat compile
npx hardhat node
# In another terminal window:
npx hardhat run scripts/deploy.js --network localhost
4.Update your frontend CONTRACT_ADDRESS with the deployed contract address.

5.Start the React app:

npm start
6.Open your browser and connect MetaMask to your local network. Interact with the DApp at http://localhost:3000.

## Usage
-Fill out the form to add new crop products with details such as crop name, farmer name, farm location, timestamp, and IPFS hash.

-After adding a product, a QR code is generated that links to the product’s detailed tracking page.

-Consumers can scan the QR code to view the complete history and status updates of the product on the blockchain.

-Transporters, warehouses, and retailers can update the product status at every stage of the supply chain to ensure transparency.

-All information is securely stored on the blockchain, providing immutable and tamper-proof traceability.

##### Future Improvements:
Implement role-based access control to restrict actions for farmers, transporters, and vendors.

Integrate IoT devices and sensors for real-time monitoring of temperature and location during transport.

Develop a mobile app to enable offline updates and broader accessibility.

Add geolocation tagging to track the physical movement of products.

Connect with government agricultural registries for certification and compliance verification.

Enhance UI/UX design for smoother user experience and better accessibility.

If you want, I can help you add badges, screenshots, or deployment instructions too!

#######License:
This project is licensed under the MIT License.
Thank you for using Farm-to-Fork DApp!







