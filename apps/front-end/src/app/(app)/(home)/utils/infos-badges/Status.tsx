'use client'

import { Status as StatusIcon } from '@/shared/assets/svgs'
import { InfoBadge } from '@/shared/components/info-badge'
import { useGetDomainStatus } from '@/shared/hooks/useGetDomainStatus'
import { useWindowWidth } from '@/shared/hooks/useWindowWidth'
import { useTheme } from 'styled-components'

export function Status() {
  const theme = useTheme()
  const status = useGetDomainStatus()
  const { width } = useWindowWidth()

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        {width > 680 && (
          <span>
            <StatusIcon
              color={
                status === 'fechado' ? theme.statusClosed : theme.statusOpen
              }
            />
          </span>
        )}

        {width <= 680 && (
          <span>
            <div
              className={`status-mobile ${status === 'fechado' && 'closed'}`}
            />
          </span>
        )}
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge>
        {width > 680 && (
          <span className="desktop">
            <InfoBadge.TitleBadge>Status</InfoBadge.TitleBadge>
          </span>
        )}
        <InfoBadge.DescriptionBadge>{status}</InfoBadge.DescriptionBadge>
      </InfoBadge.TextsBadge>
    </InfoBadge.Root>
  )
}
