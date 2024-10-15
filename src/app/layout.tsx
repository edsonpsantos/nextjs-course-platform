import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextCode Academy - Aprenda do jeito certo.',
  description: 'Sua plataforma definitiva para aprender programação e desenvolvimento de software.'
}

interface IRootLayout extends Readonly<{ children: React.ReactNode }> {}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='pt-Br'>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
