import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { trpc } from '@/utils/trpc'
import Layout from '@/components/Layout'
import { ThemeProvider } from '@/components/theme-provider'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default trpc.withTRPC(App)
