'use client'

import { Status as StatusIcon } from '@/shared/assets/svgs'
import { InfoBadge } from '@/shared/components/info-badge'
import { useTheme } from 'styled-components'

export function Status() {
  const theme = useTheme()

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <StatusIcon color={theme.iconTertiary} />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge>
        <InfoBadge.TitleBadge>Status</InfoBadge.TitleBadge>
        <InfoBadge.DescriptionBadge>Aberto</InfoBadge.DescriptionBadge>
      </InfoBadge.TextsBadge>
    </InfoBadge.Root>
  )
}
