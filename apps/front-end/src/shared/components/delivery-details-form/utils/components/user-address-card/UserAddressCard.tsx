import { MapPin, Settings } from 'lucide-react'
import {
  EditAddressButton,
  UserAddressCardHeader,
  UserAddressCardRoot,
} from './UserAddressCard.style'
import { Text } from '@/shared/components/text/Text'
import { Separator } from '@/shared/components/separator/Separator.style'
import { AddressInfos } from './utils/components/address-infos/AddressInfos'
import { useContext, useEffect, useState } from 'react'
import { DeliveryDetailsContext } from '@/shared/contexts/DeliveryDetails'
import { getLocalStorageItem } from '@/shared/functions/localStorage'
import { SPIDER_LINK_USER_INFOS } from '@/shared/constants/names'
import { DeliveryDetailsForm } from '@/shared/hooks/useDeliveryDetailsForm'

export function UserAddressCard() {
  const { openUpdateAddressDialog } = useContext(DeliveryDetailsContext)
  const [userAddressVerified, setUserAddressVerified] = useState(false)

  useEffect(() => {
    const userInfos: DeliveryDetailsForm = getLocalStorageItem(
      SPIDER_LINK_USER_INFOS,
    )

    const userAddress = userInfos?.endereco

    if (
      userAddress?.rua?.trim() &&
      userAddress?.numero?.trim() &&
      userAddress?.bairro?.trim() &&
      userAddress?.cidade?.trim()
    ) {
      setUserAddressVerified(true)
    }
  }, [])

  return (
    <UserAddressCardRoot>
      <UserAddressCardHeader>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <MapPin className="map-pin-icon" />
          <Text as="h4" size={20} $weight="600">
            Endereço
          </Text>
        </div>

        <EditAddressButton type="button" onClick={openUpdateAddressDialog}>
          <Settings className="icon" />
        </EditAddressButton>
      </UserAddressCardHeader>

      {userAddressVerified && (
        <>
          <Separator direction="horizontal" />

          <AddressInfos />
        </>
      )}
    </UserAddressCardRoot>
  )
}
