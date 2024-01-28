'use client'

import StyledComponentsRegistry from './lib/registry'
import { Header } from '@/shared/components/header/Header'
import { GlobalStyle } from '@/shared/style/global'
import { roboto } from '@/shared/style/theme/fonts'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '@/shared/hooks/useTheme'
import { darkTheme, lightTheme } from '@/shared/style/theme/theme'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme, toggleTheme } = useTheme()

  return (
    <html lang="pt-br">
      <head>
        <title>SpiderLink</title>
      </head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
