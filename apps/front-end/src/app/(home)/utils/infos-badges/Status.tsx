'use client'

import { Status as StatusIcon } from '@/shared/assets/svgs'
import { InfoBadge } from '@/shared/components/info-badge'
import { useGetDomainStatus } from '@/shared/hooks/useGetDomainStatus'
import { useTheme } from 'styled-components'

export function Status() {
  const theme = useTheme()
  const status = useGetDomainStatus()

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <StatusIcon
          color={status === 'fechado' ? theme.statusClosed : theme.statusOpen}
        />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge>
        <InfoBadge.TitleBadge>Status</InfoBadge.TitleBadge>
        <InfoBadge.DescriptionBadge>{status}</InfoBadge.DescriptionBadge>
      </InfoBadge.TextsBadge>
    </InfoBadge.Root>
  )
}
