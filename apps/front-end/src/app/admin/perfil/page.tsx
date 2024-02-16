import { Text } from '@/shared/components/text/Text'
import { AdminRoot } from '../Admin.style'
import { ProfileContent, ProfileInputs } from './Profile.style'
import Image from 'next/image'
import { Address } from './utils/inputs/Address'
import { Cep } from './utils/inputs/Cep'
import { Cnpj } from './utils/inputs/Cnpj'
import { Phone } from './utils/inputs/Phone'
import { DeliveryTime } from './utils/inputs/DeliveryTime'
import { Name } from './utils/inputs/Name'

export default function ProfilePage() {
  return (
    <AdminRoot>
      <Text
        size={28}
        fontVariant="all-small-caps"
        $weight="800"
        $letterSpacing="0.8px"
      >
        Editar perfil
      </Text>

      <ProfileContent>
        <Image
          src="/avatar.png"
          alt="avatar"
          className="avatar"
          width={80}
          height={80}
        />

        <ProfileInputs>
          <Name />
          <Address />
          <Cep />
          <Cnpj />
          <Phone />
          <DeliveryTime />
        </ProfileInputs>
      </ProfileContent>
    </AdminRoot>
  )
}
