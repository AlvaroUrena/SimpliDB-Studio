import { httpBatchLink } from '@trpc/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { trpcReact } from './trpc'
import { PropsWithChildren } from 'react'

const url = `http://localhost:${process.env.PORT ?? 3000}/api/trpc`

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } }
})

const trpcClient = trpcReact.createClient({
  links: [httpBatchLink({ url })]
})

export const withNextTRPC = ({ children }: PropsWithChildren<{}>) => (
  <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </trpcReact.Provider>
)
