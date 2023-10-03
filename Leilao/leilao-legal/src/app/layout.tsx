import NavBar from '@/components/layout/header/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FooterWithSocialMediaIcons from '@/components/layout/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leilão Legal',
  description: 'Leilão de centavos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen justify-between ${inter.className}`}>
        <header>
          <NavBar />
        </header>
        {children}
        <FooterWithSocialMediaIcons />
      </body>
    </html>
  )
}
