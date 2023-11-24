import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito_san = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anita Ikediashi | Personal Portfolio',
  description: 'My personal portfolio built with Next js and Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito_san.className}>{children}</body>
    </html>
  )
}
