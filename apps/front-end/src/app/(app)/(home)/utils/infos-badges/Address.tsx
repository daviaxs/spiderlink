'use client'

import { InfoBadge } from '@/shared/components/info-badge'
import { MapPin, Settings2 } from 'lucide-react'
import { useTheme } from 'styled-components'

export function Address() {
  const theme = useTheme()

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <MapPin color={theme.iconSecondary} />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge className="padding-right">
        <span className="desktop">
          <InfoBadge.TitleBadge>Endereço para entrega</InfoBadge.TitleBadge>
          <InfoBadge.DescriptionBadge>
            Rua SpiderLink, Jardim Sp...
          </InfoBadge.DescriptionBadge>
        </span>

        <span className="mobile">
          <InfoBadge.DescriptionBadge>Endereço</InfoBadge.DescriptionBadge>
        </span>
      </InfoBadge.TextsBadge>

      <InfoBadge.ButtonBadge>
        <Settings2 />
      </InfoBadge.ButtonBadge>
    </InfoBadge.Root>
  )
}
