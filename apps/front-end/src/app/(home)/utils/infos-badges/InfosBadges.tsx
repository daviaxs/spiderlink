'use client'

import { Motorcycle, Status } from '@/shared/assets/svgs'
import { InfoBadge } from '@/shared/components/info-badge'
import { MapPin, Settings2 } from 'lucide-react'
import { useTheme } from 'styled-components'
import { InfosBadgesRoot } from './InfosBadges.style'

export function InfosBadges() {
  const theme = useTheme()

  return (
    <InfosBadgesRoot>
      <InfoBadge.Root>
        <InfoBadge.IconBadge>
          <Motorcycle color={theme.iconSecondary} />
        </InfoBadge.IconBadge>

        <InfoBadge.TextsBadge>
          <InfoBadge.TitleBadge>Entrega</InfoBadge.TitleBadge>
          <InfoBadge.DescriptionBadge>50m a 1h</InfoBadge.DescriptionBadge>
        </InfoBadge.TextsBadge>
      </InfoBadge.Root>

      <InfoBadge.Root>
        <InfoBadge.IconBadge>
          <Status color={theme.iconTertiary} />
        </InfoBadge.IconBadge>

        <InfoBadge.TextsBadge>
          <InfoBadge.TitleBadge>Status</InfoBadge.TitleBadge>
          <InfoBadge.DescriptionBadge>Aberto</InfoBadge.DescriptionBadge>
        </InfoBadge.TextsBadge>
      </InfoBadge.Root>

      <InfoBadge.Root>
        <InfoBadge.IconBadge>
          <MapPin color={theme.iconSecondary} />
        </InfoBadge.IconBadge>

        <InfoBadge.TextsBadge>
          <InfoBadge.TitleBadge>Endereço para entrega</InfoBadge.TitleBadge>
          <InfoBadge.DescriptionBadge>
            Rua SpiderLink, Jardim Sp...
          </InfoBadge.DescriptionBadge>
        </InfoBadge.TextsBadge>

        <InfoBadge.ButtonBadge>
          <Settings2 />
        </InfoBadge.ButtonBadge>
      </InfoBadge.Root>
    </InfosBadgesRoot>
  )
}
