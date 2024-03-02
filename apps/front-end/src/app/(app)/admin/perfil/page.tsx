'use client'

import { Text } from '@/shared/components/text/Text'
import { ProfileContent, ProfileInputs, ProfileRoot } from './Profile.style'
import Image from 'next/image'
import { Address } from './utils/inputs/Address'
import { Cep } from './utils/inputs/Cep'
import { Phone } from './utils/inputs/Phone'
import { DeliveryTime } from './utils/inputs/DeliveryTime'
import { Name } from './utils/inputs/Name'
import { ChevronLeft, Pencil } from 'lucide-react'
import Link from 'next/link'
import { Schedules } from '@/shared/components/schedules'
import { Card } from './utils/components/card'
import { DeliveryCost } from './utils/inputs/DeliveryCost'

export default function ProfilePage() {
  return (
    <ProfileRoot>
      <Link href="/admin" className="backLink">
        <div>
          <ChevronLeft className="icon" />
          <Text size={16} className="text">
            Voltar
          </Text>
        </div>
      </Link>

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
          <Phone />
          <DeliveryCost />
          <DeliveryTime />
        </ProfileInputs>

        <Schedules.Root>
          <Schedules.Header>
            <Schedules.Title />

            <Link href="/admin/perfil/horarios">
              <Card.Button>
                <Pencil />
              </Card.Button>
            </Link>
          </Schedules.Header>

          <Schedules.Days />
        </Schedules.Root>
      </ProfileContent>
    </ProfileRoot>
  )
}
