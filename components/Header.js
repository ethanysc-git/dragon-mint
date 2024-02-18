import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import Decimal from "decimal.js";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Stack,
} from "@chakra-ui/react";

export default function Header() {
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };
  return (
    <nav className="bg-heroImage bg-cover bg-center height: 60px p-3 border-b-2 flex flex-row justify-between items-center ">
      <div className="flex-none gap-4 items-center">
        <Image
          className="float-left"
          src="/2024 year of the dragon.png"
          alt="2024 year of the dragon logo"
          height={100}
          width={100}
        />
        <Link className="justify-between items-center " as={NextLink} href="/">
          <h1 className="pt-6 px-6 font-bold text-3xl float-left">
            Dragon Mint
          </h1>
        </Link>
        <Breadcrumb className="py-4 px-4 float-left">
          <BreadcrumbItem className="bg-accent opacity-80 text-black rounded-l-lg m1 py-1 px-1 hover:bg-indigo-500 opacity-100 hover: text-black transition-all duration-300 ease-in-out">
            <BreadcrumbLink href="/">
              <h1 className="py-2 px-2 font-bold text-2xl float-left">Home</h1>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className="bg-accent opacity-80 text-black rounded-3x2 m1 py-1 px-1 hover:bg-indigo-500 opacity-100 hover: text-black transition-all duration-300 ease-in-out">
            <BreadcrumbLink href="/create-nft">
              <h1 className="py-2 px-2 font-bold text-2xl float-left">
                Create NFT
              </h1>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className="bg-accent opacity-80 text-black rounded-r-lg m1 py-1 px-1 hover:bg-indigo-500 opacity-100 hover: text-black transition-all duration-300 ease-in-out">
            <BreadcrumbLink href="/nft-marketplace">
              <h1 className="py-2 px-2 font-bold text-2xl float-left">
                NFT Marketplace
              </h1>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex-none gap-4 items-center">
        <Stack direction="row" spacing={10}>
          <NextLink href="/profile" passHref>
            <Button>
              <Image
                className="float-left"
                borderdadius="full"
                src="/profile.png"
                alt="profile logo"
                height={60}
                width={60}
                style={imageStyle}
              />
            </Button>
          </NextLink>
          <Button onClick={() => alert("openCartModal")}>
            <Image
              className="float-left"
              src="/shopping-cart.png"
              alt="shopping cart logo"
              height={60}
              width={60}
            />
          </Button>
        </Stack>
        <ConnectButton className="p-5 border-b-8  flex flex-row justify-between items-center float-right" />
      </div>
    </nav>
  );
}
