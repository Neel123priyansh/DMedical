const { ethers } = require("hardhat");

async function main() {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");

    const simpleStorage = await SimpleStorage.deploy(); // Deploy contract
    await simpleStorage.waitForDeployment(); // Wait for deployment

    console.log("Contract object:", simpleStorage); // Debugging line
    console.log("SimpleStorage deployed to:", simpleStorage.target); // Check if this exists
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
