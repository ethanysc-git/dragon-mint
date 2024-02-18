import Moralis from "moralis";

let allNFTs = [];

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (!Moralis.Core.isStarted) {
        await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
      }

      let nfts = await Moralis.EvmApi.nft.getWalletNFTs({
        chain: "0xaa36a7",
        format: "decimal",
        mediaItems: true,
        address: "0x1B1432102D127AaedDf9cD97dd744B7384625a72",
      });

      // nfts.raw.result.map((profile, idx) => {

      // });
      allNFTs.push(...nfts.jsonResponse.result);
      console.log(allNFTs);
    } catch (e) {
      console.error(e);
    }
  } else if (req.method === "GET") {
    try {
    } catch (e) {
      console.log(e);
      res.status(500).send("Server Error");
    }
  }
}
