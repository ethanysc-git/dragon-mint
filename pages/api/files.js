import formidable from "formidable";
const fs = require("fs");
const path = require("path");
const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({
  pinataJWTKey: process.env.NEXT_PUBLIC_PINATA_JWT,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const saveFile = async (file) => {
  try {
    const stream = fs.createReadStream(file.filepath);
    const options = {
      pinataMetadata: {
        name: file.originalFilename,
      },
    };
    const response = await pinata.pinFileToIPFS(stream, options);
    fs.unlinkSync(file.filepath);
    return response;
  } catch (error) {
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async function (err, fields, files) {
        if (err) {
          console.log({ err });
          return res.status(500).send("Upload Error");
        }
        const response = await saveFile(files.file);
        const { IpfsHash } = response;
        const JsonHash = await storeTokenUriMetadata(IpfsHash);

        return res.send(JsonHash);
      });
    } catch (e) {
      console.log(e);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "GET") {
    try {
      const response = await pinata.pinList(
        { pinataJWTKey: process.env.NEXT_PUBLIC_PINATA_JWT },
        {
          pageLimit: 1,
        }
      );
      res.json(response.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(500).send("Server Error");
    }
  }
}

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  attributes: [
    {
      trait_type: "Cuteness",
      value: 100,
    },
  ],
};

async function storeTokenUriMetadata(file_cid) {
  let metadata = { ...metadataTemplate };
  metadata.name = `ipfs_nft`;
  metadata.description = ``;
  metadata.image = `ipfs://${file_cid}`;
  console.log(`Uploading ${file_cid}...`);
  const options = {
    pinataMetadata: {
      name: metadata.name,
    },
  };
  try {
    const response = await pinata.pinJSONToIPFS(metadata, options);
    const { IpfsHash } = response;
    return IpfsHash;
  } catch (error) {
    console.log(error);
  }
  return null;
}
