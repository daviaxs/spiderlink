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
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { Loading } from '@/shared/components/loading/Loading'
import { SubsectionItem } from '../subsection-item'
import { useUpdateSubsection } from '@/shared/hooks/useUpdateSubsection'
import {
  Inputs,
  InputsOptions,
  UpdateSubsectionFormRoot,
} from './UpdateSubsectionForm.style'
import { UpdateSubsectionInput } from './inputs/UpdateSubsectionInput'
import { UpdateSubsectionLimitInput } from './inputs/UpdateSubsectionLimitInput'
import { UpdateSubsectionCheckboxInput } from './inputs/UpdateSubsectionCheckboxInput'

interface UpdateSubsectionFormProps {
  categoryId: string
  productId: string
  subsectionId: string
}

export function UpdateSubsectionForm({
  categoryId,
  productId,
  subsectionId,
}: UpdateSubsectionFormProps) {
  const { updateSubsection, errorMessage, loading, successMessage } =
    useUpdateSubsection({ categoryId, productId, subsectionId })
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <SubsectionItem.Button as="div">
          <Pencil />
        </SubsectionItem.Button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            Atualizar subseção
          </Text>

          <UpdateSubsectionFormRoot onSubmit={updateSubsection}>
            <Inputs>
              <UpdateSubsectionInput
                title="Nome"
                name="name"
                placeholder="Nome da subseção. Ex: Sabores"
                subsectionId={subsectionId}
              />

              <SpanContainer>
                <UpdateSubsectionLimitInput
                  title="Limite"
                  name="limit"
                  placeholder="Limite de quantas opções podem ser selecionadas"
                  subsectionId={subsectionId}
                />

                <Text size={14} color={theme.description}>
                  O limite serve para limitar a quantidade de opções que podem
                  ser selecionadas.
                </Text>
              </SpanContainer>

              <InputsOptions>
                <UpdateSubsectionCheckboxInput
                  title="Obrigatório"
                  name="required"
                  subsectionId={subsectionId}
                />

                <UpdateSubsectionCheckboxInput
                  title="Multipla escolha"
                  name="multipleChoice"
                  subsectionId={subsectionId}
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
          </UpdateSubsectionFormRoot>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
