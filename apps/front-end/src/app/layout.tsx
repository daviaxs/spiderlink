import type { Metadata } from 'next'
import StyledComponentsRegistry from './lib/registry'
import { Header } from '@/shared/components/header/Header'
import { GlobalStyle } from '@/shared/style/global'
import { roboto } from '@/shared/style/theme/fonts'

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
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
