import * as React from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";

export default function ApproveNFTForm(props) {
  const [tokenId, setTokenId] = React.useState("");
  const [toAddress, setToAddress] = React.useState("");

  const { config } = usePrepareContractWrite({
    address: props.contractAddress,

    abi: [
      {
        name: "approve",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        outputs: [],
      },
    ],
    functionName: "approve",
    args: [toAddress, parseInt(tokenId)],
  });
  const { write } = useContractWrite(config);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        write?.();
        setTokenId("");
        setToAddress("");
      }}
    >
      <input
        id="tokenId"
        onChange={(e) => setTokenId(e.target.value)}
        placeholder="Token ID"
        value={tokenId}
        className="mr-5 border-1 rounded-3xl py-2 text-center"
      />
      <input
        id="toAddress"
        onChange={(e) => setToAddress(e.target.value)}
        placeholder="To Address"
        value={toAddress}
        className="mr-5 border-1 rounded-3xl py-2 text-center"
      />
      <button
        disabled={!write}
        className="w-[120px] bg-secondary text-black rounded-2xl py-2 px-3 hover:bg-accent hover: text-black transition-all duration-300 ease-in-out"
      >
        Approve
      </button>
    </form>
  );
}
