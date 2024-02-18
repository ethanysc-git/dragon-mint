import { useState, useEffect, useRef } from "react";
import GET_ACTIVE_ITEMS from "@/pages/api/subgraphQueries";
import { useQuery } from "@apollo/client";
import { useAccount, useWaitForTransaction } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import NFTCard from "@/components/NFTCard";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";

export default function NFTMarketplace() {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Data : ${listedNfts}`);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className="w-full min-h-screen m-auto bg-heroImage bg-cover flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl float-left mt-20">NFT Marketplace</h1>
        <div className="h-full w-full max-w-screen-xl min-h-full my-8 mx-auto flex justify-center items-center gap-1">
          <div className="text-center rounded-lg w-full flex flex-col justify-center items-center p-2 gap-4 h-full">
            <div>
              <Wrap>
                {loading || !listedNfts ? (
                  <div>Loading...</div>
                ) : (
                  listedNfts.itemActives.map((nft, index) => {
                    const { price, nftAddress, tokenId, seller, tokenUri } =
                      nft;
                    const cid = tokenUri.replace("ipfs://", "");
                    return (
                      <div key={index}>
                        <Center>
                          <WrapItem>
                            <Center>
                              {cid && (
                                <NFTCard
                                  nftAddress={nftAddress}
                                  tokenId={tokenId}
                                  seller={seller}
                                  price={price}
                                  cid={cid}
                                  marketplaceUI={true}
                                  profileUI={false}
                                />
                              )}
                            </Center>
                          </WrapItem>
                        </Center>
                      </div>
                    );
                  })
                )}
              </Wrap>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
