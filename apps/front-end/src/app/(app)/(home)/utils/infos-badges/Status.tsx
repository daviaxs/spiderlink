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
        <span className="desktop">
          <StatusIcon
            color={status === 'fechado' ? theme.statusClosed : theme.statusOpen}
          />
        </span>

        <span className="mobile">
          <div className="status-mobile" />
        </span>
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge>
        <span className="desktop">
          <InfoBadge.TitleBadge>Status</InfoBadge.TitleBadge>
        </span>
        <InfoBadge.DescriptionBadge>{status}</InfoBadge.DescriptionBadge>
      </InfoBadge.TextsBadge>
    </InfoBadge.Root>
  )
}
