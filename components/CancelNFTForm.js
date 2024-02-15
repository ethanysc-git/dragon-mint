import * as React from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";

export default function BuyNFTForm(props) {
  const { config } = usePrepareContractWrite({
    address: "0x1c92920ca2445C3c29A9CcC551152317219C61A6",
    abi: [
      {
        name: "cancelListing",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { internalType: "address", name: "nftAddress", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        outputs: [],
      },
    ],
    functionName: "cancelListing",
    args: ["0x2Bb634109eee5dc71602066f874DA5ABC27be9D8", 0],
  });
  const { write } = useContractWrite(config);

  return (
    <>
      <div>
        <button
          onClick={() => write({})}
          className="w-[150px] bg-accent text-black rounded-3xl py-2 px-4 hover:bg-secondary hover: text-black transition-all duration-300 ease-in-out"
        >
          Cancel Listing
        </button>
      </div>
    </>
  );
}
