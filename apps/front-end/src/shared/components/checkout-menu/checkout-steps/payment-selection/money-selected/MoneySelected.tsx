import { Text } from '@/shared/components/text/Text'
import { Actions, Root, Button } from '../../defaultStyle'
import { CheckoutStepsProps } from '../../../CheckoutMenu'
import { setLocalStorageItem } from '@/shared/functions/localStorage'

export function MoneySelected({ onNext }: CheckoutStepsProps) {
  function handleMoneyOption(option: string) {
    setLocalStorageItem({ key: 'step2-needChange', value: option })

    if (option === 'Sim') {
      onNext(3)
    } else if (option === 'Não') {
      onNext(4)
    }
  }

  return (
    <Root>
      <Text as="h3" size={24} $weight="600" $textalign="center">
        Precisa de troco?
      </Text>

      <Actions>
        <Button onClick={() => handleMoneyOption('Sim')}>
          <div className="delivery-option">
            <Text size={16} $weight="600">
              Sim
            </Text>
          </div>
        </Button>

        <Button onClick={() => handleMoneyOption('Não')}>
          <div className="delivery-option">
            <Text size={16} $weight="600">
              Não
            </Text>
          </div>
        </Button>
      </Actions>
    </Root>
  )
}
