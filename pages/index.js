import { useState, useRef } from "react";
import { useAccount } from "wagmi";
import Image from "next/image";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import MintNFTForm from "@/components/MintNFTForm";
import ApproveNFTForm from "@/components/ApproveNFTForm";
import TransferNFTForm from "@/components/TransferNFTForm";
import NFTBox from "@/components/NFTBox";

export default function Home() {
  const [file, setFile] = useState("");
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);

  const inputFile = useRef(null);

  const uploadFile = async (fileToUpload) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", fileToUpload, { filename: fileToUpload.name });
      const res = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });
      const ipfsHash = await res.text();
      setCid(ipfsHash);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  const loadRecent = async () => {
    try {
      if (address == "0x1B1432102D127AaedDf9cD97dd744B7384625a72") {
        const res = await fetch("/api/files");
        const json = await res.json();
        setCid(json.ipfs_pin_hash);
      }
    } catch (e) {
      console.log(e);
      alert("trouble loading files");
    }
  };

  const { address, isConnected } = useAccount();

  return (
    <>
      <main className="w-full min-h-screen m-auto bg-heroImage bg-cover bg-center flex flex-col justify-center items-center">
        <div className="w-full h-full m-auto bg-heroImage bg-cover bg-center flex flex-col justify-center items-center">
          <div className="h-full max-w-screen-xl">
            <div className="h-full w-full m-auto flex justify-center items-center gap-8">
              <div className="w-1/2 flex flex-col gap-6">
                <h1>Dragon Mint + IPFS</h1>
                <p>Use Dragon Mint to mint your own NFT</p>
                <OrderedList>
                  <ListItem>Upload your file</ListItem>
                  <ListItem>Mint your own NFT</ListItem>
                </OrderedList>
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />

                <div>
                  {/* <button
                    onClick={loadRecent}
                    className="mr-10 w-[150px] bg-secondary text-black border-2 rounded-3xl py-2 px-4 hover:bg-accent hover: text-black transition-all duration-300 ease-in-out"
                  >
                    Load recent
                  </button> */}

                  <button
                    disabled={uploading}
                    onClick={() => inputFile.current.click()}
                    className="w-[150px] bg-secondary text-black rounded-3xl py-2 px-4 hover:bg-accent hover: text-black transition-all duration-300 ease-in-out"
                  >
                    {uploading ? "Uploading..." : "Upload"}
                  </button>
                </div>
                {cid && <NFTBox cid={cid} />}
                {cid && (
                  <MintNFTForm
                    cid={cid}
                    contractAddress="0x2Bb634109eee5dc71602066f874DA5ABC27be9D8"
                  />
                )}
              </div>
              <div className="w-1/2 flex justify-center items-center h-full">
                <Image
                  height={600}
                  width={600}
                  src="/2024 year of the dragon.png"
                  alt="2024 year of the dragon.png"
                />
              </div>
            </div>
          </div>
          <div className="h-full w-full bg-secondary">
            <div className="max-w-screen-xl min-h-full my-8 mx-auto flex justify-center items-center gap-8">
              <div className="text-center bg-light rounded-lg w-full flex flex-col justify-center items-center p-2 gap-4 h-[475px]">
                <Image
                  src="/gift.png"
                  alt="NFT Gift Airdrop"
                  height="168"
                  width="168"
                />
                <h2 className="font-telegraf font-bold text-3xl">
                  Airdrop NFT to your friend
                </h2>

                <p className="w-2/3">Airdrop NFT to your friend.</p>
                <p className="w-2/3 text-red-600/100">
                  Only use for contract
                  0x2Bb634109eee5dc71602066f874DA5ABC27be9D8
                </p>
                <div>
                  <ApproveNFTForm contractAddress="0x2Bb634109eee5dc71602066f874DA5ABC27be9D8" />
                </div>
                <div>
                  <TransferNFTForm contractAddress="0x2Bb634109eee5dc71602066f874DA5ABC27be9D8" />
                </div>
              </div>
              <div className="text-center bg-light rounded-lg w-full flex flex-col justify-center items-center p-2 gap-4 h-[475px]">
                <Image
                  src="/golden shovel.png"
                  alt="Golden Shovel"
                  height="320"
                  width="320"
                />
                <h2 className="font-telegraf font-bold text-3xl">
                  Mint Your Own NFT
                </h2>

                <p className="w-2/3">Upload your file to mint your own NFT.</p>
                {cid && (
                  <MintNFTForm
                    cid={cid}
                    contractAddress="0x2Bb634109eee5dc71602066f874DA5ABC27be9D8"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
