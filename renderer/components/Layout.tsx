import Head from 'next/head'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>SimpliDB Studio</title>
        <meta name='description' content='Simple DataBase Client' />
      </Head>
      {children}
    </>
  )
}
