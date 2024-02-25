import * as Dialog from '@radix-ui/react-dialog'
import { Trash2, X } from 'lucide-react'
import {
  Close,
  Content,
  Overlay,
  Trigger,
} from '@/shared/components/DialogBase.style'
import { useTheme } from 'styled-components'
import { Text } from '@/shared/components/text/Text'
import { DeleteProduct } from '../ListProducts.style'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { useContext } from 'react'
import { ProductsContext } from '@/shared/contexts/Products'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { Loading } from '@/shared/components/loading/Loading'

interface DeleteProductFormProps {
  name: string
  productId: string
}

export function DeleteProductForm({ name, productId }: DeleteProductFormProps) {
  const theme = useTheme()
  const { deleteProduct, loading } = useContext(ProductsContext)

  return (
    <Dialog.Root>
      <Trigger
        style={{ position: 'absolute', right: '0' }}
        name="deletar-produto"
      >
        <DeleteProduct>
          <Trash2 color={theme.icon} />
        </DeleteProduct>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <SpanContainer $align="center">
            <Text size={32} $weight="600" $textalign="center">
              Apagar produto: {name}
            </Text>

            <Text size={16} $textalign="center" color={theme.description}>
              Tem certeza que deseja apagar o produto? Ao apagar, não será
              possível recuperar os dados.
            </Text>
          </SpanContainer>

          <ButtonForm
            size="full"
            color="primary"
            onClick={() => deleteProduct(productId)}
          >
            {loading ? <Loading /> : 'Apagar'}
          </ButtonForm>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
