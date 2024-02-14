'use client'

import StyledComponentsRegistry from './lib/registry'
import { Header } from '@/shared/components/header/Header'
import { GlobalStyle } from '@/shared/style/global'
import { roboto } from '@/shared/style/theme/fonts'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '@/shared/hooks/useTheme'
import { darkTheme, lightTheme } from '@/shared/style/theme/theme'
import { DomainInfosProvider } from '@/shared/contexts/DomainInfos'
import Head from 'next/head'
import { SchedulesProvider } from '@/shared/contexts/Schedules'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme, toggleTheme } = useTheme()

  return (
    <html lang="pt-br">
      <Head>
        <title>SpiderLink</title>
      </Head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <DomainInfosProvider>
              <SchedulesProvider>
                <GlobalStyle />
                <Header toggleTheme={toggleTheme} />
                {children}
              </SchedulesProvider>
            </DomainInfosProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
