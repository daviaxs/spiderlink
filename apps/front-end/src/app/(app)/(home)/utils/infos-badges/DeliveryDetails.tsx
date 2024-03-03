'use client'

import { DeliveryDetailsForm as DeliveryDetailsFormComponent } from '@/shared/components/delivery-details-form/DeliveryDetailsForm'
import { InfoBadge } from '@/shared/components/info-badge'
import { SPIDER_LINK_USER_INFOS } from '@/shared/constants/names'
import { getLocalStorageItem } from '@/shared/functions/localStorage'
import { DeliveryDetailsForm } from '@/shared/hooks/useDeliveryDetailsForm'
import { MapPin } from 'lucide-react'
import { useTheme } from 'styled-components'

export function DeliveryDetails() {
  const theme = useTheme()
  const userData = getLocalStorageItem(
    SPIDER_LINK_USER_INFOS,
  ) as DeliveryDetailsForm

  function formatDescription() {
    if (!userData) {
      return 'Não informado'
    }

    const description = `${userData.nome} - ${userData.endereco.rua}, ${userData.endereco.numero} ${userData.endereco.cidade}`

    if (description.length > 20) {
      return `${description.slice(0, 20)}...`
    }

    return description
  }

  return (
    <InfoBadge.Root>
      <InfoBadge.IconBadge>
        <MapPin color={theme.iconSecondary} />
      </InfoBadge.IconBadge>

      <InfoBadge.TextsBadge className="padding-right">
        <span className="desktop">
          <InfoBadge.TitleBadge>Dados para entrega</InfoBadge.TitleBadge>
          <InfoBadge.DescriptionBadge>
            {formatDescription()}
          </InfoBadge.DescriptionBadge>
        </span>

        <span className="mobile">
          <InfoBadge.DescriptionBadge>Entrega</InfoBadge.DescriptionBadge>
        </span>
      </InfoBadge.TextsBadge>

      <DeliveryDetailsFormComponent />
    </InfoBadge.Root>
  )
}
