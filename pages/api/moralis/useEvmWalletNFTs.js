import Moralis from "moralis";

let allNFTs = [];

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (!Moralis.Core.isStarted) {
        await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
      }

      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        chain: "0xaa36a7",
        format: "decimal",
        mediaItems: true,
        address: "0x1B1432102D127AaedDf9cD97dd744B7384625a72",
      });

      // response.raw.result.map((profile, idx) => {});
      allNFTs.push(...response.jsonResponse.result);
      console.log(allNFTs);
      return res.json({ result: allNFTs });
    } catch (e) {
      console.error(e);
    }
  } else if (req.method === "GET") {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}
