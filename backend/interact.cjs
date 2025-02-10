const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853"; // Your deployed contract address

    // Get the contract ABI and attach to deployed address
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.attach(contractAddress);

    // 📌 Call a function (Example: Set and Get a value)
    console.log("Setting value to 42...");
    const tx = await simpleStorage.set(42); // If your contract has a `set()` function
    await tx.wait(); // Wait for transaction confirmation

    const value = await simpleStorage.get(); // If your contract has a `get()` function
    console.log("Stored Value:", value.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
