import * as React from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";

export default function MintNFTForm(props) {
  const [tokenId, setTokenId] = React.useState("");
  const { config } = usePrepareContractWrite({
    address: props.contractAddress,
    abi: [
      {
        name: "mint",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [{ internalType: "string", name: "tokenUri", type: "string" }],
        outputs: [],
      },
    ],
    functionName: "mint",
    args: ["ipfs://" + props.cid],
  });
  const { write } = useContractWrite(config);
  return (
    <div>
      <button
        disabled={!write}
        onClick={() => write({})}
        className="mr-10 w-[150px] bg-secondary text-black border-2 rounded-3xl py-2 px-4 hover:bg-accent hover: text-black transition-all duration-300 ease-in-out"
      >
        Mint
      </button>
    </div>
  );
}
