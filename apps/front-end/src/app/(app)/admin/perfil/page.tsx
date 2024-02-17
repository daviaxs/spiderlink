'use client'

import { Text } from '@/shared/components/text/Text'
import { AdminRoot } from '../Admin.style'
import { ProfileContent, ProfileInputs } from './Profile.style'
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

export default function ProfilePage() {
  return (
    <AdminRoot>
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
          <DeliveryTime />
        </ProfileInputs>

        <Schedules.Root>
          <Schedules.Header>
            <Schedules.Title />

            <Card.Button>
              <Pencil />
            </Card.Button>
          </Schedules.Header>

          <Schedules.Days />
        </Schedules.Root>
      </ProfileContent>
    </AdminRoot>
  )
}
