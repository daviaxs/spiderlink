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
import { useUpdateDeliveryTime } from '@/shared/hooks/domainValues/useUpdateDeliveryTime'

export function DeliveryTimeForm() {
  const theme = useTheme()
  const { deliveryTime } = useContext(DomainInfosContext)
  const { methods, updateDeliveryTime, loading, successMessage, errorMessage } =
    useUpdateDeliveryTime()

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
              Editar tempo de entrega
            </Text>
            <Text
              size={16}
              $weight="400"
              color={theme.description}
              $textalign="center"
            >
              Tente manter o tempo de entrega o mais preciso possível. <br />{' '}
              Ex: 30m a 1h
            </Text>
          </SpanContainer>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>

          <FormProvider {...methods}>
            <Form.Content onSubmit={methods.handleSubmit(updateDeliveryTime)}>
              <SpanContainer>
                <Form.Input
                  type="text"
                  placeholder={deliveryTime}
                  autoComplete="current-deliveryTime"
                  register={methods.register('deliveryTime')}
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
