require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
POLYGON_MAINNET_RPC_URL="https://polygon-mainnet.g.alchemy.com/v2/HTtldVxBzuq_ZU5dUD3MWcCEqi4yDeQ5"
PRIVATE_KEY="3c37ecbd7c612c13808f8677a0cb3482b6cca20c666fc141119735f63f9b523b"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
    polygon:{
      url: POLYGON_MAINNET_RPC_URL, // Alchemy/Infura API URL
      accounts: [PRIVATE_KEY], // Your wallet private key
    }
  }
};


//https://polygon-mainnet.g.alchemy.com/v2/HTtldVxBzuq_ZU5dUD3MWcCEqi4yDeQ5
/*import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: "HTtldVxBzuq_ZU5dUD3MWcCEqi4yDeQ5",
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(settings);

async function main() {
  // Hash of the transaction you want to trace
  let txHash =
    "0x7ae597f01a9c8de356a12eeb656cded7807ae75cf22ab2cbd34ad5aeb8f1ae57";

  // Using the traceTransaction method to get the traces of the transaction
  let txTrace = await alchemy.debug.traceTransaction(txHash, {
    type: "callTracer",
  });

  // Logging the traces of the transaction
  console.log(txTrace);
}

// Calling the main function to run the code
main();*/