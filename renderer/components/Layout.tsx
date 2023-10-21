import Head from 'next/head'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>SERP Preview</title>
        <meta name='description' content='SimpliDBStudio' />
      </Head>
      <main className='min-h-screen p-2'>{children}</main>
    </>
  )
}
