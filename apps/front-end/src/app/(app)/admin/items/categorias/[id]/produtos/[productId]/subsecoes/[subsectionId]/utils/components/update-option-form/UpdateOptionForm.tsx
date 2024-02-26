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
import { FormContent, FormRoot } from '../create-option-form/OptionForm.style'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { Loading } from '@/shared/components/loading/Loading'
import { InputsRoot } from '@/shared/components/inputs/Inputs.style'
import { useUpdateOption } from '@/shared/hooks/useUpdateOptions'
import { UpdateOptionInput } from './inputs/UpdateOptionInput'
import { UpdateOptionPrice } from './inputs/UpdateOptionPrice'
import { UpdateOptionTextarea } from './inputs/UpdateOptionTextarea'

interface UpdateOptionFormProps {
  optionId: string
}

export function UpdateOptionForm({ optionId }: UpdateOptionFormProps) {
  const { updateOption, errorMessage, loading, successMessage } =
    useUpdateOption({ optionId })

  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger style={{ padding: '0' }} name="atualizar-opção">
        <div className="ActionButton">
          <Pencil />
        </div>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            Atualizar Opção
          </Text>

          <FormRoot onSubmit={updateOption}>
            <FormContent>
              <InputsRoot>
                <UpdateOptionInput
                  title="Nome*"
                  name="name"
                  placeholder="Nome da opção"
                  optionId={optionId}
                />
                <UpdateOptionPrice
                  title="Preço*"
                  name="price"
                  placeholder="Preço da opção"
                  optionId={optionId}
                />
                <UpdateOptionTextarea
                  title="Descrição"
                  name="description"
                  placeholder="Descrição da opção"
                  optionId={optionId}
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
