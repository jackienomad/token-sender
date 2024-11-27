import {
  createPublicClient,
  createWalletClient,
  defineChain,
  http,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import * as dotenv from 'dotenv';

dotenv.config();

export const sovrunTestChain = defineChain({
  id: 8202496,
  name: 'Sovrun Testnet',
  network: 'Sovrun Testnet',
  nativeCurrency: {
    name: 'Sovrun',
    symbol: 'SOVRUN',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://sovruntest.rpc.caldera.xyz/http'],
      ws: ['wss://sovruntest.rpc.caldera.xyz/ws'],
    },
  },
  blockExplorers: {
    default: {
      url: 'https://sovruntest.explorer.caldera.xyz/',
      name: 'Sovrun Testnet Explorer',
    },
  },
});

export const sovrunL3TestChain = defineChain({
  id: 42229,
  name: 'Sovrun Testnet',
  network: 'Sovrun Testnet',
  nativeCurrency: {
    name: 'Sovrun',
    symbol: 'SOVRUN',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://l3.zgv2b.breederdao.io/http'],
      ws: ['wss://l3.zgv2b.breederdao.io/wss'],
    },
  },
  blockExplorers: {
    default: {
      url: 'https://explorer.l3.zgv2b.breederdao.io/',
      name: 'Sovrun L3 Testnet Explorer',
    },
  },
});

// export const walletClient = createWalletClient({
//   chain: sovrunTestChain,
//   account: privateKeyToAccount(`0x${process.env.WALLET_PRIVATE_KEY}`),
//   transport: http(),
// });

export const walletClientL3 = createWalletClient({
  chain: sovrunL3TestChain,
  account: privateKeyToAccount(`0x${process.env.WALLET_PRIVATE_KEY}`),
  transport: http(),
});

export const publicClient = createPublicClient({
  chain: sovrunL3TestChain,
  transport: http(),
});
