// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AgriTrace {
    struct Product {
        string cropName;
        string farmerName;
        string farmLocation;
        string timestamp;
        string[] updates;
        string ipfsHash;
    }

    mapping(uint => Product) public products;
    uint public productCount;

    function addProduct(
        string memory cropName,
        string memory farmerName,
        string memory farmLocation,
        string memory timestamp,
        string memory ipfsHash
    ) public returns (uint) {
        productCount++;
        products[productCount] = Product(
            cropName,
            farmerName,
            farmLocation,
            timestamp,
            new string[](0),
            ipfsHash
        );
        return productCount;
    }

    function updateStatus(uint productId, string memory newUpdate) public {
        require(productId > 0 && productId <= productCount, "Invalid product ID");
        products[productId].updates.push(newUpdate);
    }

    function getProduct(uint productId) public view returns (
        string memory, string memory, string memory, string memory, string[] memory, string memory
    ) {
        Product storage p = products[productId];
        return (p.cropName, p.farmerName, p.farmLocation, p.timestamp, p.updates, p.ipfsHash);
    }
}
