import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from '../DialogBase.style'
import { X } from 'lucide-react'
import { useContext } from 'react'
import { ProductAddToCartContextContext } from '@/shared/contexts/ProductAddToCartContextContext'

export function ProductAddedToCartSuccessfully() {
  const { isOpen, closeDialog } = useContext(ProductAddToCartContextContext)

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Overlay onClick={closeDialog} />

        <Content>
          <Close onClick={closeDialog}>
            <X size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
