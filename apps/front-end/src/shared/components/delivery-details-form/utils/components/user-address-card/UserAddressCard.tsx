import { MapPin, Settings } from 'lucide-react'
import {
  EditAddressButton,
  UserAddressCardHeader,
  UserAddressCardRoot,
} from './UserAddressCard.style'
import { Text } from '@/shared/components/text/Text'
import { Separator } from '@/shared/components/separator/Separator.style'
import { AddressInfos } from './utils/components/address-infos/AddressInfos'
import { useContext } from 'react'
import { UpdateAddressContext } from '@/shared/contexts/UpdateAddress'

export function UserAddressCard() {
  const { openUpdateAddressDialog } = useContext(UpdateAddressContext)

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

      <Separator direction="horizontal" />

      <AddressInfos />
    </UserAddressCardRoot>
  )
}
