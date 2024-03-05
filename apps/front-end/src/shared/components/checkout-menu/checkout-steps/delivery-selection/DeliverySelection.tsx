'use client'

import { Text } from '@/shared/components/text/Text'
import { DeliverySelectionButton } from './DeliverySelection.style'
import { Motorcycle } from '@/shared/assets/svgs'
import { useTheme } from 'styled-components'
import { Clock, Store } from 'lucide-react'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { Actions, Root } from '../defaultStyle'
import { CheckoutStepsProps } from '../../CheckoutMenu'
import { setLocalStorageItem } from '@/shared/functions/localStorage'

export function DeliverySelection({ onNext }: CheckoutStepsProps) {
  const theme = useTheme()
  const { deliveryTime } = useContext(DomainInfosContext)

  const handleDeliveryOption = (option: string) => {
    setLocalStorageItem({ key: 'step0-deliveryOption', value: option })

    if (option === 'Entrega') {
      onNext(1)
    } else if (option === 'Retirada') {
      onNext(4)
    }
  }

  return (
    <Root>
      <Text as="h3" size={24} $weight="600" $textalign="center">
        Escolha o modo de entrega
      </Text>

      <Actions>
        <DeliverySelectionButton
          onClick={() => handleDeliveryOption('Entrega')}
        >
          <div className="delivery-option">
            <Motorcycle className="icon" color={theme.iconSecondary} />
            <Text size={16} $weight="600">
              Entrega
            </Text>
          </div>

          <div className="delivery-alert">
            <Clock color={theme.description} size={18} />
            <Text size={12} $weight="600" color={theme.description}>
              {deliveryTime}
            </Text>
          </div>
        </DeliverySelectionButton>

        <DeliverySelectionButton
          onClick={() => handleDeliveryOption('Retirada')}
        >
          <div className="delivery-option">
            <Store className="icon" color={theme.iconSecondary} />
            <Text size={16} $weight="600">
              Retirada
            </Text>
          </div>
        </DeliverySelectionButton>
      </Actions>
    </Root>
  )
}
