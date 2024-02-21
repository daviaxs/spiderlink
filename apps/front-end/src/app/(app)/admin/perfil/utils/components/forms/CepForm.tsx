import * as Dialog from '@radix-ui/react-dialog'
import { Check, Pencil, X } from 'lucide-react'
import {
  Close,
  Content,
  Overlay,
  Trigger,
} from '@/shared/components/DialogBase.style'
import { useTheme } from 'styled-components'
import { Card } from '../card'
import { Text } from '@/shared/components/text/Text'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { Form } from '@/shared/components/form'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { FormProvider } from 'react-hook-form'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { useUpdateCep } from '@/shared/hooks/domainValues/useUpdateCep'

export function CepForm() {
  const theme = useTheme()
  const { cep } = useContext(DomainInfosContext)
  const { methods, updateCep, loading, successMessage, errorMessage } =
    useUpdateCep()

  return (
    <Dialog.Root>
      <Trigger>
        <Card.Button>
          <Pencil />
        </Card.Button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            Editar cep
          </Text>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>

          <FormProvider {...methods}>
            <Form.Content onSubmit={methods.handleSubmit(updateCep)}>
              <SpanContainer>
                <Form.Input
                  type="text"
                  placeholder={cep}
                  autoComplete="current-cep"
                  register={methods.register('cep')}
                />
              </SpanContainer>

              {errorMessage && <Text size={16}>{errorMessage}</Text>}

              <ButtonForm
                type="submit"
                size="full"
                color="secondary"
                disabled={
                  !methods.formState.isValid ||
                  methods.formState.isSubmitting ||
                  successMessage ||
                  loading
                }
              >
                {loading ? (
                  'Salvando...'
                ) : successMessage ? (
                  <Check />
                ) : (
                  'Salvar'
                )}
              </ButtonForm>
            </Form.Content>
          </FormProvider>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
