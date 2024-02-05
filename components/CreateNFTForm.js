import * as React from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";

export default function CreateNFTForm(props) {
  const { config } = usePrepareContractWrite({
    address: props.contractAddress,
    abi: [
      {
        name: "createUnitNft",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { internalType: "string", name: "_tokenName", type: "string" },
          { internalType: "string", name: "_tokenSymbol", type: "string" },
          {
            internalType: "uint256",
            name: "_tokenTotalSupply",
            type: "uint256",
          },
        ],
        outputs: [],
      },
    ],
    functionName: "createUnitNft",
    args: [
      props.collectionNameInput,
      props.collectionSymbolInput,
      props.collectionTotalSupplyInput,
    ],
  });
  const { write } = useContractWrite(config);
  return (
    <div>
      <button
        disabled={!write}
        onClick={() => write({})}
        className="w-[150px] bg-heroImage text-black rounded-3xl py-2 px-4 hover:bg-accent hover: text-black transition-all duration-300 ease-in-out"
      >
        Create
      </button>
    </div>
  );
}
