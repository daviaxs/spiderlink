import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import { Header } from '@/shared/components/header/Header'
import { GlobalStyle } from '@/shared/style/global'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpiderLink',
  description: 'SpiderLink',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
