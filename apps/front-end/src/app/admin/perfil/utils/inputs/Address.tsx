'use client'

import { Pencil } from 'lucide-react'
import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'

export function Address() {
  const { address } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>endereço</Card.Title>

        <Card.Button>
          <Pencil />
        </Card.Button>
      </Card.Header>

      <Card.Description>
        {address.substring(0, 40)}
        {address.length > 40 && '...'}
      </Card.Description>
    </Card.Root>
  )
}
