const pinataSDK = require("@pinata/sdk");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const pinataApiKey = process.env.NEXT_PINATA_API_KEY || "";
const pinataApiSecret = process.env.NEXT_PINATA_API_SECRET || "";
const pinata = new pinataSDK(pinataApiKey, pinataApiSecret);

async function storeImages(imagesFilePath) {
  const fullImagesPath = path.resolve(imagesFilePath);
  const files = fs
    .readdirSync(fullImagesPath)
    .filter((file) => file.includes(".png"));

  let responses = [];
  console.log("Uploading to IPFS");

  for (const fileIndex in files) {
    const readableStreamForFile = fs.createReadStream(
      `${fullImagesPath}/${files[fileIndex]}`
    );
    const options = {
      pinataMetadata: {
        name: files[fileIndex],
      },
    };
    try {
      await pinata
        .pinFileToIPFS(readableStreamForFile, options)
        .then((result) => {
          responses.push(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return { responses, files };
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
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}

module.exports = { storeImages, storeTokenUriMetadata };
