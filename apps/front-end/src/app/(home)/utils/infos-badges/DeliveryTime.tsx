'use client'

import { Motorcycle } from '@/shared/assets/svgs'
import { InfoBadge } from '@/shared/components/info-badge'
import { useTheme } from 'styled-components'

export function DeliveryTime() {
  const theme = useTheme()

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <Motorcycle color={theme.iconSecondary} />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge>
        <InfoBadge.TitleBadge>Entrega</InfoBadge.TitleBadge>
        <InfoBadge.DescriptionBadge>50m a 1h</InfoBadge.DescriptionBadge>
      </InfoBadge.TextsBadge>
    </InfoBadge.Root>
  )
}
