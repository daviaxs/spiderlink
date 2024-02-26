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
import { CreateSubsectionInput } from './inputs/CreateSubsectionInput'
import {
  CreateSubsectionFormRoot,
  Inputs,
  InputsOptions,
} from './CreateSubsectionForm.style'
import { CreateSubsectionCheckboxInput } from './inputs/CreateSubsectionCheckboxInput'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { CreateSubsectionLimitInput } from './inputs/CreateSubsectionLimitInput'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { useCreateSubsection } from '@/shared/hooks/useCreateSubsection'
import { Loading } from '@/shared/components/loading/Loading'

interface CreateSubsectionFormProps {
  categoryId: string
  productId: string
}

export function CreateSubsectionForm({
  categoryId,
  productId,
}: CreateSubsectionFormProps) {
  const { createSubsection, errorMessage, loading, successMessage } =
    useCreateSubsection({ categoryId, productId })
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <Toolbar.Button>
          <Plus color={theme.iconSecondary} />
          <Text size={16} $weight="600" className="textButton">
            Criar subseção
          </Text>
        </Toolbar.Button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            Criar subseção
          </Text>

          <CreateSubsectionFormRoot onSubmit={createSubsection}>
            <Inputs>
              <CreateSubsectionInput
                title="Nome*"
                name="name"
                placeholder="Nome da subseção. Ex: Sabores"
              />

              <SpanContainer>
                <CreateSubsectionLimitInput
                  title="Limite*"
                  name="limit"
                  placeholder="Limite de quantas opções podem ser selecionadas"
                />

                <Text size={14} color={theme.description}>
                  O limite serve para limitar a quantidade de opções que podem
                  ser selecionadas.
                </Text>
              </SpanContainer>

              <InputsOptions>
                <CreateSubsectionCheckboxInput
                  title="Obrigatório"
                  name="required"
                />

                <CreateSubsectionCheckboxInput
                  title="Multipla escolha"
                  name="multipleChoice"
                />
              </InputsOptions>
            </Inputs>

            {errorMessage && <Text size={16}>{errorMessage}</Text>}

            <ButtonForm
              size="full"
              color="primary"
              disabled={loading || successMessage}
            >
              {loading ? <Loading /> : successMessage ? <Check /> : 'Criar'}
            </ButtonForm>
          </CreateSubsectionFormRoot>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
