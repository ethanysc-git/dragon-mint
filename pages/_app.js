import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Head from "next/head";
import Header from "../components/Header";
import { AiFillGithub } from "react-icons/ai";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

//
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import LockScreen from "react-lock-screen";
//

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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
});

export default function App({ Component, pageProps }) {
  const getLockScreenUi = (setLock) => {
    return (
      <div className="react-lock-screen__ui">
        <LockClosedIcon className="h-8 w-8 text-gray-700" />
        <p>Just to be safe, we locked the screen</p>
        <button onClick={() => setLock(false)}>
          <LockOpenIcon className="h-8 w-8 text-gray-700" />
        </button>
      </div>
    );
  };

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Head>
          <title>Dragon Mint</title>
          <meta name="description" content="Generated with create-pinata-app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/2024 year of the dragon.png" />
        </Head>
        <LockScreen timeout={600000} ui={getLockScreenUi}>
          <Header />
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
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
        </LockScreen>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
