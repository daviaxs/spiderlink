'use client'

import { Motorcycle } from '@/shared/assets/svgs'
import { InfoBadge } from '@/shared/components/info-badge'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

export function DeliveryTime() {
  const theme = useTheme()
  const { deliveryTime } = useContext(DomainInfosContext)

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <Motorcycle color={theme.iconSecondary} />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge>
        <InfoBadge.TitleBadge>Entrega</InfoBadge.TitleBadge>
        <InfoBadge.DescriptionBadge>{deliveryTime}</InfoBadge.DescriptionBadge>
      </InfoBadge.TextsBadge>
    </InfoBadge.Root>
  )
}
