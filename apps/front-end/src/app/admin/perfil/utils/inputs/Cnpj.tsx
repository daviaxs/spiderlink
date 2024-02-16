'use client'

import { Pencil } from 'lucide-react'
import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { convertToCnpj } from '@/shared/functions/convertToCnpj'

export function Cnpj() {
  const { cnpj } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>cnpj</Card.Title>

        <Card.Button>
          <Pencil />
        </Card.Button>
      </Card.Header>

      <Card.Description>{convertToCnpj(cnpj)}</Card.Description>
    </Card.Root>
  )
}
