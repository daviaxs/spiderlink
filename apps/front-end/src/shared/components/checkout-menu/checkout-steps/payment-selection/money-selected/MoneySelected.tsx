import { Text } from '@/shared/components/text/Text'
import { Actions, Root, Button } from '../../defaultStyle'
import { CheckoutStepsProps } from '../../../CheckoutMenu'

export function MoneySelected({ onNext }: CheckoutStepsProps) {
  return (
    <Root>
      <Text as="h3" size={24} $weight="600" $textalign="center">
        Precisa de troco?
      </Text>

      <Actions>
        <Button onClick={() => onNext(3)}>
          <div className="delivery-option">
            <Text size={16} $weight="600">
              Sim
            </Text>
          </div>
        </Button>

        <Button onClick={() => onNext(4)}>
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
