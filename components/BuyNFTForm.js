import * as React from "react";
// import { ethers } from "ethers";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { usePrepareContractWrite, useContractWrite } from "wagmi";

export default function BuyNFTForm(props) {
  const { address, isConnected } = useAccount();
  const { config } = usePrepareContractWrite({
    address: props.contractAddress,
    abi: [
      {
        name: "buyItem",
        type: "function",
        stateMutability: "payable",
        inputs: [
          { internalType: "address", name: "nftAddress", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        outputs: [],
      },
    ],
    functionName: "buyItem",
    args: [props.nftAddress, props.tokenId],
    from: address,
    value: props.price,
  });
  const { write } = useContractWrite(config);

  return (
    <>
      <div>
        <button
          onClick={() => write({})}
          className="w-[150px] bg-accent text-black rounded-3xl py-2 px-4 hover:bg-secondary hover: text-black transition-all duration-300 ease-in-out"
        >
          Buy now
        </button>
      </div>
    </>
  );
}
