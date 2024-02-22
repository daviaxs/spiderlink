'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'lucide-react'
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

export function CreateProductForm() {
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

          <FormRoot>
            <FormContent>
              <div>
                <MediaPicker />

                <AddProductimageButton>
                  <label
                    htmlFor="coverUrl"
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
                  name="productName"
                  placeholder="Nome do produto"
                />
                <CreateProductPrice
                  title="Preço"
                  name="productPrice"
                  placeholder="Preço do produto"
                />
                <CreateProductTextarea
                  title="Descrição"
                  name="productDescription"
                  placeholder="Descrição do produto"
                />
              </InputsRoot>
            </FormContent>

            <ButtonForm size="full">Salvar</ButtonForm>
          </FormRoot>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
