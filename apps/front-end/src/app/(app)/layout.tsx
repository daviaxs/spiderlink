'use client'

import StyledComponentsRegistry from '../lib/registry'
import { Header } from '@/shared/components/header/Header'
import { GlobalStyle } from '@/shared/style/global'
import { roboto } from '@/shared/style/theme/fonts'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '@/shared/hooks/useTheme'
import { darkTheme, lightTheme } from '@/shared/style/theme/theme'
import { DomainInfosProvider } from '@/shared/contexts/DomainInfos'
import { SchedulesProvider } from '@/shared/contexts/Schedules'
import Head from 'next/head'
import { CategoriesProvider } from '@/shared/contexts/Categories'
import { ProductsProvider } from '@/shared/contexts/Products'
import { SubsectionsProvider } from '@/shared/contexts/Subsections'
import { OptionsProvider } from '@/shared/contexts/Options'
import { CartProvider } from '@/shared/contexts/cart-context/CartContext'
import { ProductAddedToCartSuccessfully } from '@/shared/components/product-added-to-cart-successfully-dialog/ProductAddedToCartSuccessfully'
import { ProductAddToCartProvider } from '@/shared/contexts/ProductAddToCart'
import { DeliveryDetailsProvider } from '@/shared/contexts/DeliveryDetails'
import { UpdateAddress } from '@/shared/components/delivery-details-form/utils/components/user-address-card/utils/components/update-address/UpdateAddress'
import { CheckoutMenu } from '@/shared/components/checkout-menu/CheckoutMenu'
import { ClosedDialog } from '@/shared/components/cart-menu/utils/components/footer-cart/closed-dialog/ClosedDialog'

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
            <ProductAddToCartProvider>
              <DeliveryDetailsProvider>
                <DomainInfosProvider>
                  <CategoriesProvider>
                    <ProductsProvider>
                      <SubsectionsProvider>
                        <OptionsProvider>
                          <SchedulesProvider>
                            <CartProvider>
                              <GlobalStyle />
                              <Header toggleTheme={toggleTheme} />
                              <ProductAddedToCartSuccessfully />
                              <UpdateAddress />
                              <CheckoutMenu />
                              <ClosedDialog />
                              {children}
                            </CartProvider>
                          </SchedulesProvider>
                        </OptionsProvider>
                      </SubsectionsProvider>
                    </ProductsProvider>
                  </CategoriesProvider>
                </DomainInfosProvider>
              </DeliveryDetailsProvider>
            </ProductAddToCartProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
