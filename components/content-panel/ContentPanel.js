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
  const { address, isConnected } = useAccount();

  const { openConnectModal } = useConnectModal();
  // const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);
  // const { loading, error, data: listedNfts } = props.listedNfts;
  //[...,
  // {
  //   amount: '1',
  //   token_id: '3',
  //   token_address: '0x2bb634109eee5dc71602066f874da5abc27be9d8',
  //   contract_type: 'ERC721',
  //   owner_of: '0x1b1432102d127aaeddf9cd97dd744b7384625a72',
  //   last_metadata_sync: null,
  //   last_token_uri_sync: '2024-02-17T08:33:31.278Z',
  //   metadata: null,
  //   block_number: '5288505',
  //   block_number_minted: '5288505',
  //   name: 'UnitNft',
  //   symbol: 'UNFT',
  //   token_hash: 'c25bbbc8eb57bed4fb3ca029be82a532',
  //   token_uri: 'ipfs://QmaXUPkqzBna8s3Azb3nkBdfzckvzgKErmbaJUG6jrXk8N',
  //   minter_address: '0x1b1432102d127aaeddf9cd97dd744b7384625a72',
  //   verified_collection: false,
  //   possible_spam: false,
  //   collection_logo: null,
  //   collection_banner_image: null
  // },
  //...]
  //
  console.log;
  let DATA = {
    data: {
      itemActives: [
        {
          id: "0x2bb634109eee5dc71602066f874da5abc27be9d801000000",
          tokenId: "1",
          seller: "0x299d1ef582d839a5635cfa2e3ce1f72e06630e88",
          buyer: "0x299d1ef582d839a5635cfa2e3ce1f72e06630e88",
          nftAddress: "0x2bb634109eee5dc71602066f874da5abc27be9d8",
          tokenUri: "ipfs://QmTHKFaNqUocBfdotjbDahwdmURjJcPwUuwxyn1sVMehjx",
          price: "0",
        },
        {
          id: "0x2bb634109eee5dc71602066f874da5abc27be9d803000000",
          tokenId: "3",
          seller: "0x1b1432102d127aaeddf9cd97dd744b7384625a72",
          buyer: "0x1b1432102d127aaeddf9cd97dd744b7384625a72",
          nftAddress: "0x2bb634109eee5dc71602066f874da5abc27be9d8",
          tokenUri: "ipfs://QmaXUPkqzBna8s3Azb3nkBdfzckvzgKErmbaJUG6jrXk8N",
          price: "0",
        },
        {
          id: "0x2bb634109eee5dc71602066f874da5abc27be9d804000000",
          tokenId: "4",
          seller: "0x1b1432102d127aaeddf9cd97dd744b7384625a72",
          buyer: "0x1b1432102d127aaeddf9cd97dd744b7384625a72",
          nftAddress: "0x2bb634109eee5dc71602066f874da5abc27be9d8",
          tokenUri: "ipfs://Qmdo78x4BZxQkCNicqVgtouBVWD8qwQM9PgEcV3kMbDDtg",
          price: "0",
        },
        {
          id: "0x2bb634109eee5dc71602066f874da5abc27be9d805000000",
          tokenId: "5",
          seller: "0x1b1432102d127aaeddf9cd97dd744b7384625a72",
          buyer: "0x0000000000000000000000000000000000000000",
          nftAddress: "0x2bb634109eee5dc71602066f874da5abc27be9d8",
          tokenUri: "ipfs://QmRS5wc5KoBsggdBUYDvNfBmbSLxBrJTTEqtt65xfxN4nN",
          price: "100000000",
        },
        {
          id: "0x2bb634109eee5dc71602066f874da5abc27be9d807000000",
          tokenId: "7",
          seller: "0x299d1ef582d839a5635cfa2e3ce1f72e06630e88",
          buyer: "0x0000000000000000000000000000000000000000",
          nftAddress: "0x2bb634109eee5dc71602066f874da5abc27be9d8",
          tokenUri: "ipfs://QmQaWAvYZttbKkv91gQ3E639xQndu8SLg6dvrq3b9BR1v6",
          price: "10000000000",
        },
        {
          id: "0x2bb634109eee5dc71602066f874da5abc27be9d808000000",
          tokenId: "8",
          seller: "0x1b1432102d127aaeddf9cd97dd744b7384625a72",
          buyer: "0x0000000000000000000000000000000000000000",
          nftAddress: "0x2bb634109eee5dc71602066f874da5abc27be9d8",
          tokenUri: "ipfs://QmTTAsMs7JnftogqEV9WYBNVK7YFzdbSNkDBEGi3HRWpRA",
          price: "10000000000",
        },
        {
          id: "0x2bb634109eee5dc71602066f874da5abc27be9d809000000",
          tokenId: "9",
          seller: "0x1b1432102d127aaeddf9cd97dd744b7384625a72",
          buyer: "0x0000000000000000000000000000000000000000",
          nftAddress: "0x2bb634109eee5dc71602066f874da5abc27be9d8",
          tokenUri: "ipfs://QmTxzHzmtkUPNagx5mLiArNm2JAN1ZFbjqFYvphRFYWVYY",
          price: "10000000000",
        },
        {
          id: "0x2bb634109eee5dc71602066f874da5abc27be9d80c000000",
          tokenId: "12",
          seller: "0x1b1432102d127aaeddf9cd97dd744b7384625a72",
          buyer: "0x0000000000000000000000000000000000000000",
          nftAddress: "0x2bb634109eee5dc71602066f874da5abc27be9d8",
          tokenUri: "QmXfcbeakmmiXF3SEKDqKgk6mgoAvjPrZbwpMGcH1Ejwce",
          price: "100000000000000000000",
        },
      ],
    },
  };
  //

  //
  const { loading, error, data: listedNfts } = DATA;
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
                            marketplaceUI={false}
                            profileUI={true}
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
