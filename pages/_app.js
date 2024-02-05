import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Head from "next/head";
import Header from "../components/Header";
import { AiFillGithub } from "react-icons/ai";

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Dragon Mint",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Head>
          <title>Dragon Mint</title>
          <meta name="description" content="Generated with create-pinata-app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/2024 year of the dragon.png" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <div className="bg-accent w-full h-full">
          <div className="max-w-screen-xl mx-auto py-6 flex justify-between items-center text-light">
            <p className="text-xs">WAGMI © 2024</p>
            <a
              href="https://github.com/ethanysc-git/dragon-mint"
              target="_blank"
            >
              <AiFillGithub />
            </a>

            <div className="flex items-center gap-10 mr-4"></div>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
