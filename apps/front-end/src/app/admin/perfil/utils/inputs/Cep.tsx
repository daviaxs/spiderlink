'use client'

import { Pencil } from 'lucide-react'
import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { convertToCep } from '@/shared/functions/convertToCep'

export function Cep() {
  const { cep } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>cep</Card.Title>

        <Card.Button>
          <Pencil />
        </Card.Button>
      </Card.Header>

      <Card.Description>{convertToCep(cep)}</Card.Description>
    </Card.Root>
  )
}
