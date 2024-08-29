import './Homepage.css'

import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { WagmiProvider } from 'wagmi';
import { sepolia, mainnet } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { sayHello } from '../contract-functions/functions';

const queryClient = new QueryClient();
const config = getDefaultConfig({
  projectId: import.meta.env.VITE_PROJECT_ID,
  chains: [ sepolia, mainnet ],
  ssr: true
});

export default function Homepage () {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={sepolia}>
          <div className='Homepage'>


            <ConnectButton label="Sign in" accountStatus="avatar" chainStatus="icon" showBalance={true} />
            <button onClick={
                async () => {
                  console.log(`Hello ${await sayHello()}`);
                }
              }>Say Hello</button>


          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}