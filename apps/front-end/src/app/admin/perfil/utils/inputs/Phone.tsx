'use client'

import { Pencil } from 'lucide-react'
import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { convertToPhoneBRFormat } from '@/shared/functions/convertToPhoneBRFormat'

export function Phone() {
  const { phone } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>telefone</Card.Title>

        <Card.Button>
          <Pencil />
        </Card.Button>
      </Card.Header>

      <Card.Description>{convertToPhoneBRFormat(phone)}</Card.Description>
    </Card.Root>
  )
}
