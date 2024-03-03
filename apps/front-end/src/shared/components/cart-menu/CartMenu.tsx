import * as Dialog from '@radix-ui/react-dialog'
import {
  Close,
  Content,
  MenuContent,
  MenuHeader,
  Overlay,
  Trigger,
} from './CartMenu.style'
import { Text } from '../text/Text'
import { ShoppingBasket, X } from 'lucide-react'
import { useTheme } from 'styled-components'
import { ListCartProducts } from './utils/ListCartProducts'
import { Alert } from './utils/components/alert/Alert'
import { useContext, useEffect, useState } from 'react'
import { ECOMMERCE_NAME } from '@/shared/constants/names'
import { CartContext } from '@/shared/contexts/cart-context/CartContext'
import { FooterCart } from './utils/components/footer-cart/FooterCart'
import { CartEmpty } from './utils/CartEmpty'

export function CartMenu() {
  const theme = useTheme()
  const [productsInCart, setProductsInCart] = useState(0)
  const {
    addProduct,
    removeProduct,
    isCartDialogOpen,
    closeCartDialog,
    openCartDialog,
  } = useContext(CartContext)

  useEffect(() => {
    const productsCart = JSON.parse(
      localStorage.getItem(`${ECOMMERCE_NAME}-products-cart`) || '[]',
    )

    if (productsCart) {
      setProductsInCart(productsCart.length)
    }
  }, [addProduct, removeProduct])

  return (
    <Dialog.Root open={isCartDialogOpen}>
      <Trigger onClick={openCartDialog}>
        <ShoppingBasket size={30} />

        {productsInCart > 0 && (
          <Alert>{productsInCart > 9 ? '9+' : productsInCart}</Alert>
        )}
      </Trigger>

      <Dialog.Portal>
        <Overlay onClick={closeCartDialog} />

        <Content>
          <MenuHeader>
            <Text size={24} $weight="600">
              Carrinho
            </Text>

            <Close onClick={closeCartDialog}>
              <X size={30} color={theme.icon} />
            </Close>
          </MenuHeader>

          <MenuContent>
            {productsInCart > 0 ? (
              <ListCartProducts />
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <CartEmpty />
              </div>
            )}
          </MenuContent>

          {productsInCart > 0 && <FooterCart />}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
