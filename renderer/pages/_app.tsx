import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { trpc } from '@/utils/trpc'
import Layout from '@/components/Layout'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '../locales'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <Layout>
        <I18nProvider locale={pageProps.locale}>
          <Component {...pageProps} />
        </I18nProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default trpc.withTRPC(App)
