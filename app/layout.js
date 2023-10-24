import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { headers } from "next/headers";
import LastUpdated from '@/components/lastUpdated/LastUpdated';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Josiah Scott',
  description: 'Josiah Scott Dev Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <LastUpdated></LastUpdated>
        <Analytics />
        </body>
    </html>
  )
}
