'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Check, Pencil, X } from 'lucide-react'
import { Text } from '@/shared/components/text/Text'
import {
  Close,
  Content,
  Overlay,
  Trigger,
} from '@/shared/components/DialogBase.style'
import { useTheme } from 'styled-components'
import {
  AddProductimageButton,
  FormContent,
  FormRoot,
} from '../create-product-form/ProductForm.style'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { UpdateProductMediaPicker } from './inputs/UpdateProductMediaPicker'
import { UpdateProductInput } from './inputs/UpdateProductInput'
import { UpdateProductPrice } from './inputs/UpdateProductPrice'
import { UpdateProductTextarea } from './inputs/UpdateProductTextarea'
import { useUpdateProduct } from '@/shared/hooks/useUpdateProduct'
import { Loading } from '@/shared/components/loading/Loading'
import { InputsRoot } from '@/shared/components/inputs/Inputs.style'

interface UpdateProductFormProps {
  categoryId: string
  productId: string
}

export function UpdateProductForm({
  productId,
  categoryId,
}: UpdateProductFormProps) {
  const { errorMessage, loading, successMessage, updateProduct } =
    useUpdateProduct({ categoryId, productId })
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger style={{ padding: 0 }}>
        <ButtonForm
          size="full"
          as="div"
          style={{ padding: '1rem', height: '50px' }}
          name="atualizar-produto"
        >
          <Pencil />
        </ButtonForm>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            Atualizar produto
          </Text>

          <FormRoot onSubmit={updateProduct}>
            <FormContent>
              <div>
                <UpdateProductMediaPicker productId={productId} />

                <AddProductimageButton>
                  <label
                    htmlFor="img"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Text size={16} color={theme.description}>
                      Adicionar imagem
                    </Text>
                  </label>
                </AddProductimageButton>
              </div>

              <InputsRoot>
                <UpdateProductInput
                  title="Nome"
                  name="name"
                  placeholder="Nome do produto"
                  productId={productId}
                />
                <UpdateProductPrice
                  title="Preço"
                  name="price"
                  placeholder="Preço do produto"
                  productId={productId}
                />
                <UpdateProductTextarea
                  title="Descrição"
                  name="description"
                  placeholder="Descrição do produto"
                  productId={productId}
                />
              </InputsRoot>
            </FormContent>

            {errorMessage && <Text size={16}>{errorMessage}</Text>}

            <ButtonForm
              type="submit"
              size="full"
              disabled={successMessage || loading}
              color="primary"
            >
              {loading ? <Loading /> : successMessage ? <Check /> : 'Atualizar'}
            </ButtonForm>
          </FormRoot>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
