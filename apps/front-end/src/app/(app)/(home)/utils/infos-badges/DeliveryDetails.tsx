'use client'

import { DeliveryDetailsForm } from '@/shared/components/delivery-details-form/DeliveryDetailsForm'
import { InfoBadge } from '@/shared/components/info-badge'
import { MapPin } from 'lucide-react'
import { useTheme } from 'styled-components'

export function DeliveryDetails() {
  const theme = useTheme()

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <MapPin color={theme.iconSecondary} />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge className="padding-right">
        <span className="desktop">
          <InfoBadge.TitleBadge>Dados para entrega</InfoBadge.TitleBadge>
          <InfoBadge.DescriptionBadge>
            Rua SpiderLink, Jardim Sp...
          </InfoBadge.DescriptionBadge>
        </span>

        <span className="mobile">
          <InfoBadge.DescriptionBadge>Endereço</InfoBadge.DescriptionBadge>
        </span>
      </InfoBadge.TextsBadge>

      <DeliveryDetailsForm />
    </InfoBadge.Root>
  )
}
