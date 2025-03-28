import { mainnet, polygon, arbitrum } from '@wagmi/core/chains'
import { QueryClient } from '@tanstack/react-query'
import {
  createAppKit,
  defaultWagmiConfig
} from '@reown/appkit-wagmi-react-native'
import { authConnector } from '@reown/appkit-auth-wagmi-react-native'

export const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.reown.com
export const projectId = process.env.EXPO_PUBLIC_PROJECT_ID!

// 2. Create config
const metadata = {
  name: 'AppKit RN',
  description: 'AppKit RN Example',
  url: 'https://reown.com/appkit',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [mainnet, polygon, arbitrum] as const

const auth = authConnector({ projectId, metadata })

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  extraConnectors: [auth]
})

// 3. Create modal
createAppKit({
  projectId,
  wagmiConfig,

  features: {
    email: true, // default to true
    socials: ['x', 'discord', 'apple'], // default value
    emailShowWallets: true // default to true
  }
})
