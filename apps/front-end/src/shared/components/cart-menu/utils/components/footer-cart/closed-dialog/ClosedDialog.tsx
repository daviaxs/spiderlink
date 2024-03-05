import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useContext } from 'react'
import { CartContext } from '@/shared/contexts/cart-context/CartContext'
import { Text } from '@/shared/components/text/Text'
import { Close, Content, Overlay } from '@/shared/components/DialogBase.style'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'

export function ClosedDialog() {
  const { isDeliveryClosedDialogOpen, closeDeliveryClosedDialog } =
    useContext(CartContext)

  return (
    <Dialog.Root open={isDeliveryClosedDialogOpen}>
      <Dialog.Portal>
        <Overlay onClick={closeDeliveryClosedDialog} />

        <Content>
          <SpanContainer $align="center" $gap={0.5}>
            <Text as="h2" size={24} $weight="800" $textalign="center">
              Estamos fechados no momento.
            </Text>
            <Text as="h2" size={24} $weight="800" $textalign="center">
              Volte mais tarde!
            </Text>
          </SpanContainer>

          <ButtonForm onClick={closeDeliveryClosedDialog} size="full">
            Fechar
          </ButtonForm>

          <Close onClick={closeDeliveryClosedDialog}>
            <X size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
