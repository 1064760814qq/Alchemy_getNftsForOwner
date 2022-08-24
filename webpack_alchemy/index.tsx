import { Network, Alchemy } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
// const settings = {
//   apiKey: "KM6CyV17uCzqjRcETzGD8Du4Q1jFAimG", // Replace with your Alchemy API Key.
//   network: Network.ETH_MAINNET, // Replace with your network.
// };

const settings = {
  apiKey: "lKsPH03Bqn3oMk7hBnDYhYmNI_4Fmqm0", // Replace with your Alchemy API Key.
  network: Network.MATIC_MAINNET, // Replace with your network.
};



const alchemy = new Alchemy(settings);

console.log('success')

// Print owner's wallet address:
const ownerAddr = "0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83";
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");
console.log(alchemy)

// Print total NFT count returned in the response:
alchemy.core.getBlockNumber().then(console.log);
const as = async() => {
  const asVal = await alchemy.nft.getNftsForOwner('0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83');
  console.log('-----', asVal)
};
as();
// const nftsForOwner = await alchemy.nft.getNftsForOwner('0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83');
//console.log("number of NFTs found:", nftsForOwner.totalCount);
console.log("...");

// Print contract address and tokenId for each NFT:
/*for (const nft of nftsForOwner.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.tokenId);
}
console.log("===");

// Fetch metadata for a particular NFT:
console.log("fetching metadata for a Crypto Coven NFT...");*/

/*const response = await alchemy.nft.getNftMetadata(
  "0x5180db8F5c931aaE63c74266b211F580155ecac8",
  "1590"
);
console.log(response)*/

// Uncomment this line to see the full api response:
// console.log(response);

// Print some commonly used fields:
/*
console.log("NFT name: ", response.title);
console.log("token type: ", response.tokenType);
console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.rawMetadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");
*/