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
import { Toolbar } from '@/shared/components/toolbar'
import { FormContent, FormRoot } from './OptionForm.style'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { Loading } from '@/shared/components/loading/Loading'
import { useCreateOption } from '@/shared/hooks/useCreateOption'
import { InputText } from '@/shared/components/inputs/InputText'
import { InputPrice } from '@/shared/components/inputs/InputPrice'
import { InputTextarea } from '@/shared/components/inputs/InputTextarea'
import { InputsRoot } from '@/shared/components/inputs/Inputs.style'

interface CreateOptionFormProps {
  subsectionId: string
  categoryId: string
  productId: string
}

export function CreateOptionForm({
  categoryId,
  productId,
  subsectionId,
}: CreateOptionFormProps) {
  const { createOption, errorMessage, loading, successMessage } =
    useCreateOption({ subsectionId, categoryId, productId })

  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <Toolbar.Button>
          <Plus color={theme.iconSecondary} />
          <Text size={16} $weight="600" className="textButton">
            Criar opção
          </Text>
        </Toolbar.Button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            Criar Opção
          </Text>

          <FormRoot onSubmit={createOption}>
            <FormContent>
              <InputsRoot>
                <InputText
                  title="Nome"
                  name="name"
                  placeholder="Nome da opção"
                />
                <InputPrice
                  title="Preço"
                  name="price"
                  placeholder="Preço da opção"
                />
                <InputTextarea
                  title="Descrição"
                  name="description"
                  placeholder="Descrição da opção"
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
