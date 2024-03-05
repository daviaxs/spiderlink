import { Text } from '@/shared/components/text/Text'
import { Actions, Button, Root } from '../defaultStyle'
import { Banknote, CreditCard } from 'lucide-react'
import { useTheme } from 'styled-components'
import { CheckoutStepsProps } from '../../CheckoutMenu'
import { setLocalStorageItem } from '@/shared/functions/localStorage'

export function PaymentSelection({ onNext }: CheckoutStepsProps) {
  const theme = useTheme()

  function handlePaymentOption(option: string) {
    setLocalStorageItem({ key: 'step1-paymentOption', value: option })

    if (option === 'Dinheiro') {
      onNext(2)
    } else if (option === 'Cartão') {
      onNext(4)
    }
  }

  return (
    <Root>
      <Text as="h3" size={24} $weight="600" $textalign="center">
        Escolha o modo de pagamento
      </Text>

      <Actions>
        <Button onClick={() => handlePaymentOption('Dinheiro')}>
          <div className="delivery-option">
            <Banknote color={theme.iconSecondary} />
            <Text size={16} $weight="600">
              Dinheiro
            </Text>
          </div>
        </Button>

        <Button onClick={() => handlePaymentOption('Cartão')}>
          <div className="delivery-option">
            <CreditCard color={theme.iconSecondary} />
            <Text size={16} $weight="600">
              Cartão
            </Text>
          </div>
        </Button>
      </Actions>
    </Root>
  )
}
