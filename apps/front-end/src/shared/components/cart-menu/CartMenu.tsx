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

export function CartMenu() {
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <ShoppingBasket size={30} />
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
