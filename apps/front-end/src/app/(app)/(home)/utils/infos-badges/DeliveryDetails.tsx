'use client'

import { DeliveryDetailsForm as DeliveryDetailsFormComponent } from '@/shared/components/delivery-details-form/DeliveryDetailsForm'
import { InfoBadge } from '@/shared/components/info-badge'
import { DeliveryDetailsContext } from '@/shared/contexts/DeliveryDetails'
import { useWindowWidth } from '@/shared/hooks/useWindowWidth'
import { MapPin } from 'lucide-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

export function DeliveryDetails() {
  const theme = useTheme()
  const { userDeliveryDetails } = useContext(DeliveryDetailsContext)
  const { width } = useWindowWidth()

  function formatDescription() {
    if (!userDeliveryDetails) {
      return 'Não informado'
    }

    const description = `${userDeliveryDetails?.nome} - ${userDeliveryDetails.endereco.rua}, ${userDeliveryDetails.endereco.numero} ${userDeliveryDetails.endereco.cidade}`

    if (description.length > 20) {
      return `${description.slice(0, 20)}...`
    }

    return description
  }

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <MapPin color={theme.iconSecondary} />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge className="padding-right">
        {width > 680 && (
          <span>
            <InfoBadge.TitleBadge>Dados para entrega</InfoBadge.TitleBadge>
            <InfoBadge.DescriptionBadge>
              {formatDescription()}
            </InfoBadge.DescriptionBadge>
          </span>
        )}

        {width <= 680 && (
          <span>
            <InfoBadge.DescriptionBadge>Entrega</InfoBadge.DescriptionBadge>
          </span>
        )}
      </InfoBadge.TextsBadge>

      <DeliveryDetailsFormComponent />
    </InfoBadge.Root>
  )
}
