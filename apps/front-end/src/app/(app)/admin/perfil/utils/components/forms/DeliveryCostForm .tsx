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
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { useUpdateDeliveryCost } from '@/shared/hooks/domainValues/useUpdateDeliveryCost'
import { PriceInput } from './components/PriceInput'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { FormRoot } from './DeliveryCostForm.style'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'

export function DeliveryCostForm() {
  const theme = useTheme()
  const { deliveryCost } = useContext(DomainInfosContext)
  const { updateDeliveryCost, loading, successMessage, errorMessage } =
    useUpdateDeliveryCost()

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
              Editar custo de entrega
            </Text>

            <Text
              size={16}
              $weight="400"
              color={theme.description}
              $textalign="center"
            >
              Caso queira definir o custo de entrega como grátis, apenas deixe o
              valor como R$ 0,00.
            </Text>
          </SpanContainer>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>

          <FormRoot onSubmit={updateDeliveryCost}>
            <PriceInput
              name="deliveryCost"
              placeholder={convertPriceToBRFormat(deliveryCost)}
            />

            {errorMessage && (
              <Text size={16} $weight="600">
                {errorMessage}
              </Text>
            )}

            <ButtonForm
              type="submit"
              size="full"
              disabled={loading || successMessage}
            >
              {loading ? 'Salvando...' : successMessage ? <Check /> : 'Salvar'}
            </ButtonForm>
          </FormRoot>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
