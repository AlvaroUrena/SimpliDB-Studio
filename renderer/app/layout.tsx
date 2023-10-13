// import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SERP Preview',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className + ' bg-gradient-to-tr from-background to-accent'
        }
      >
        <main className='min-h-screen p-2'>{children}</main>
      </body>
    </html>
  )
}
