import { mainnet, polygon, arbitrum } from '@wagmi/core/chains'
import { QueryClient } from '@tanstack/react-query'
import {
  createAppKit,
  defaultWagmiConfig
} from '@reown/appkit-wagmi-react-native'

export const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.reown.com
export const projectId = 'e9a4e561b8cd7ef77a4539b779e43f2c'

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

export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createAppKit({
  projectId,
  wagmiConfig
})
