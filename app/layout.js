import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Josiah Scott',
  description: 'Personal Developer Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
