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
} from "@chakra-ui/react";

export default function Header() {
  return (
    <nav className="bg-heroImage bg-cover bg-center height: 60px p-3 border-b-2 flex flex-row justify-between items-center">
      <div className="flex-none gap-4 items-center">
        <Image
          className="float-left"
          src="/2024 year of the dragon.png"
          alt="2024 year of the dragon logo"
          height={30}
          width={60}
        />
        <Link as={NextLink} href="/">
          <h1 className="py-4 px-4 font-bold text-3xl float-left">
            Dragon Mint
          </h1>
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <h1 className="py-2 px-2 font-bold text-2xl float-left">Home</h1>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/create-nft">
              <h1 className="py-2 px-2 font-bold text-2xl float-left">
                Create NFT
              </h1>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <ConnectButton className="p-3 border-b-8 flex flex-row justify-between items-center" />
      </div>
    </nav>
  );
}
