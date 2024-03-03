import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from '../DialogBase.style'
import { X } from 'lucide-react'
import { useContext } from 'react'
import { ProductAddToCartContextContext } from '@/shared/contexts/ProductAddToCartContextContext'
import { Text } from '../text/Text'
import { ButtonForm } from '../buttons/button-form/ButtonForm'
import { Actions } from './ProductAddedToCartSuccessfully.style'
import { CartContext } from '@/shared/contexts/cart-context/CartContext'

export function ProductAddedToCartSuccessfully() {
  const { isOpen, closeAddProductDialog } = useContext(
    ProductAddToCartContextContext,
  )
  const { openCartDialog } = useContext(CartContext)

  function handleOpenCartDialog() {
    openCartDialog()
    closeAddProductDialog()
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Overlay onClick={closeAddProductDialog} />

        <Content>
          <Text as="h2" size={28} $weight="800" $textalign="center">
            Produto adicionado ao carrinho!
          </Text>

          <Actions>
            <ButtonForm
              className="button"
              onClick={closeAddProductDialog}
              size="full"
            >
              Pedir mais
            </ButtonForm>

            <ButtonForm
              className="button"
              onClick={handleOpenCartDialog}
              size="full"
            >
              Ir para o carrinho
            </ButtonForm>
          </Actions>

          <Close onClick={closeAddProductDialog}>
            <X size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
