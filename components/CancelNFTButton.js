import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";

export default function CancelNFTButton(props) {
  const { address, isConnected } = useAccount();
  const { config } = usePrepareContractWrite({
    address: props.contractAddress,
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
    args: [props.nftAddress, props.tokenId],
  });
  const { write } = useContractWrite(config);

  return (
    <button
      onClick={() => write({})}
      className="w-[150px] bg-accent text-black rounded-3xl py-2 px-4 hover:bg-secondary hover: text-black transition-all duration-300 ease-in-out"
    >
      Cancel Listing
    </button>
  );
}
