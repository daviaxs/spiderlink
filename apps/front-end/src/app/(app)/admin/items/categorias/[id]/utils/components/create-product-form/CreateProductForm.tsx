'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Check, Plus, X } from 'lucide-react'
import { Text } from '@/shared/components/text/Text'
import {
  Close,
  Content,
  Overlay,
  Trigger,
} from '@/shared/components/DialogBase.style'
import { useTheme } from 'styled-components'
import { Toolbar } from '../toolbar'
import { MediaPicker } from './inputs/MediaPicker'
import {
  AddProductimageButton,
  FormContent,
  FormRoot,
  InputsRoot,
} from './ProductForm.style'
import { CreateProductInput } from './inputs/CreateProductInput'
import { CreateProductTextarea } from './inputs/CreateProductTextarea'
import { CreateProductPrice } from './inputs/CreateProductPrice'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { useCreateProduct } from '@/shared/hooks/useCreateProduct'
import { Loading } from '@/shared/components/loading/Loading'

export function CreateProductForm({ categoryId }: { categoryId: string }) {
  const { createProduct, errorMessage, loading, successMessage } =
    useCreateProduct({ categoryId })

  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <Toolbar.Button>
          <Plus color={theme.iconSecondary} />
          <Text size={16} $weight="600" className="textButton">
            Criar produto
          </Text>
        </Toolbar.Button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            Criar Produto
          </Text>

          <FormRoot onSubmit={createProduct}>
            <FormContent>
              <div>
                <MediaPicker />

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
                <CreateProductInput
                  title="Nome"
                  name="name"
                  placeholder="Nome do produto"
                />
                <CreateProductPrice
                  title="Preço"
                  name="price"
                  placeholder="Preço do produto"
                />
                <CreateProductTextarea
                  title="Descrição"
                  name="description"
                  placeholder="Descrição do produto"
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
              {loading ? <Loading /> : successMessage ? <Check /> : 'Criar'}
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
