import React, { useState } from "react";
import Image from "next/image";
import Gradient from "./gradient/Gradient";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Avatar from "./avatar/Avatar";
//
import GET_ACTIVE_ITEMS from "@/pages/api/subgraphQueries";
import { useQuery } from "@apollo/client";
import { useAccount, useWaitForTransaction } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import NFTCard from "@/components/NFTCard";
import {
  Wrap,
  WrapItem,
  Center,
  Divider,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";
//
export const ContentPanel = (props) => {
  //
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);
  //
  return (
    <div className="w-full m-1">
      {/* <div className="h-1/5 border-b-1 border-slate-200">
        <Gradient firstName={props.firstName} lastName={props.lastName} />
      </div> */}
      <div className="flex gap-2 m-8 float-right">
        <button onClick={() => alert("setIsEditModalOpen(true)")}>
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-200 hover:bg-green-300 sm:mx-0 sm:h-10 sm:w-10 hover:drop-shadow-md">
            <PencilIcon className="h-8 w-8 text-gray-700" />
          </div>
        </button>
        <button onClick={() => alert("setIsDeleteModalOpen(true)")}>
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-200 hover:bg-red-300 sm:mx-0 sm:h-10 sm:w-10 hover:drop-shadow-md">
            <TrashIcon className="h-8 w-8 text-gray-700" />
          </div>
        </button>
      </div>
      <div className="flex gap-2 m-8 float-right">
        <h2 className="text-5xl text-gray-900">
          {props.firstName}
          <strong className="ml-3">{props.lastName}</strong>
        </h2>
      </div>
      <div>
        <Avatar name={`${props.firstName} ${props.lastName}`} />
      </div>
      <Box position="relative" padding="5">
        <div className="ml-10">
          <h1>NFT Collection</h1>
        </div>
        <AbsoluteCenter>
          <div class="flex items-stretch items-center">
            <Image
              src="/pen and pen dividing line.png"
              alt="pen and pen dividing line"
              height={250}
              width={250}
            />
          </div>
        </AbsoluteCenter>
      </Box>
      <div>
        <Wrap>
          {loading || !listedNfts ? (
            <div>Loading...</div>
          ) : (
            listedNfts.itemActives.map((nft, index) => {
              const { price, nftAddress, tokenId, seller, tokenUri } = nft;
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
  );
};
