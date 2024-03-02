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

export function CartMenu() {
  const theme = useTheme()
  const [productsInCart, setProductsInCart] = useState(0)
  const { addProduct, removeProduct } = useContext(CartContext)

  useEffect(() => {
    const productsCart = JSON.parse(
      localStorage.getItem(`${ECOMMERCE_NAME}-products-cart`) || '[]',
    )

    if (productsCart) {
      setProductsInCart(productsCart.length)
    }
  }, [addProduct, removeProduct])

  return (
    <Dialog.Root>
      <Trigger>
        <ShoppingBasket size={30} />

        {productsInCart > 0 && (
          <Alert>{productsInCart > 9 ? '9+' : productsInCart}</Alert>
        )}
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <MenuHeader>
            <Text size={24} $weight="600">
              Carrinho
            </Text>

            <Close>
              <X size={30} color={theme.icon} />
            </Close>
          </MenuHeader>

          <MenuContent>
            <ListCartProducts />
          </MenuContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
