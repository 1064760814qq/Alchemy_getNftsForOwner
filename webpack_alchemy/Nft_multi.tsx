// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "写你自己的apikey",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);
console.log('alchemy',alchemy)
var pageKeyTemp ;
const main = async () => {
  // Contract address
  console.log('test')
  const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

  // Flag to omit metadata
  const omitMetadata = false;

  // Get all NFTs
  console.log('最多300个')
  for (var i=0; i<5; i++)
    {
  const response = await alchemy.nft.getNftsForContract(address, {
    omitMetadata: omitMetadata,
    pageKey: pageKeyTemp

  });
  pageKeyTemp = response.pageKey
  // console.log(JSON.stringify(response, null, 2));
  console.log(response.pageKey)
  console.log(response)
  }
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();