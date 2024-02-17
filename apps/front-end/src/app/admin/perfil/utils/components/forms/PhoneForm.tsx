import * as Dialog from '@radix-ui/react-dialog'
import { Check, Pencil, X } from 'lucide-react'
import { Close, Content, Overlay, Trigger } from './Form.style'
import { useTheme } from 'styled-components'
import { Card } from '../card'
import { Text } from '@/shared/components/text/Text'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { Form } from '@/shared/components/form'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { FormProvider } from 'react-hook-form'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { useUpdatePhone } from '@/shared/hooks/domainValues/useUpdatePhone'
import { convertToPhoneBRFormat } from '@/shared/functions/convertToPhoneBRFormat'
import { ErrorMessage } from '@/shared/components/form/ErrorMenssage'

export function PhoneForm() {
  const theme = useTheme()
  const { phone } = useContext(DomainInfosContext)
  const { methods, updatePhone, loading, successMessage, errorMessage } =
    useUpdatePhone()

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
          <SpanContainer $align="center">
            <Text size={32} $weight="600" $textalign="center">
              Editar telefone
            </Text>
            <Text
              size={16}
              $weight="400"
              color={theme.description}
              $textalign="center"
            >
              Inclua apenas o DDD e o número. <br /> Não inclua caracteres
              especiais como parênteses, traços ou espaços.
            </Text>
          </SpanContainer>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>

          <FormProvider {...methods}>
            <Form.Content onSubmit={methods.handleSubmit(updatePhone)}>
              <SpanContainer>
                <Form.Input
                  type="text"
                  placeholder={convertToPhoneBRFormat(phone)}
                  autoComplete="current-phone"
                  register={methods.register('phone')}
                />
                <ErrorMessage name="phone" />
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
