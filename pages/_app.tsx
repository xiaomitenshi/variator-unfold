import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.css';

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Header />
        <Component {...pageProps} />
        <div class={styles.front}>
          <div class={styles.frontpage}>
            <div class={styles.introtext}>
              <ul>Redeem your</ul>
              <ul>DAO Tokens</ul>
              <div class={styles.subheading}>
                Perform Tasks, Earn Rewards and Redeem with Merch or Tickets!
              </div>
              <div class={styles.button}>Visit Marketplace</div>
            </div>
            <div class={styles.imghe}>
              <img src="https://firebasestorage.googleapis.com/v0/b/logpro-f2137.appspot.com/o/1.png?alt=media&token=2b17acaa-947c-4851-a55c-306d0d5ee56c" />
            </div>
          </div>
          <div class={styles.rear}>
            <div class={styles.re}>
              <ul>Making your community active</ul>
              <ul>is now easier with</ul>
              <ul>XXXXXXXXX</ul>
            </div>
            <div class={styles.button2}>Create your token</div>
          </div>
        </div>
        <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
