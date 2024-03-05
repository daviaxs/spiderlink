'use client'

import { Motorcycle } from '@/shared/assets/svgs'
import { InfoBadge } from '@/shared/components/info-badge'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { useWindowWidth } from '@/shared/hooks/useWindowWidth'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

export function DeliveryTime() {
  const theme = useTheme()
  const { deliveryTime } = useContext(DomainInfosContext)
  const { width } = useWindowWidth()

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <Motorcycle color={theme.iconSecondary} />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge>
        {width > 680 && (
          <span>
            <InfoBadge.TitleBadge>Entrega</InfoBadge.TitleBadge>
          </span>
        )}

        <InfoBadge.DescriptionBadge>{deliveryTime}</InfoBadge.DescriptionBadge>
      </InfoBadge.TextsBadge>
    </InfoBadge.Root>
  )
}
