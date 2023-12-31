import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  polygonMumbai,
  sepolia,
  avalancheFuji,
  bscTestnet,
  optimismGoerli,
} from "wagmi/chains";

const { chains, publicClient } = configureChains(
  [sepolia, polygonMumbai, avalancheFuji, bscTestnet, optimismGoerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: process.env.NEXT_PUBLIC_WALLET_CONNECT_APP_NAME || "",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RainbowWagmiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
