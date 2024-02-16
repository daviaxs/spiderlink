'use client'

import { Pencil } from 'lucide-react'
import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'

export function DeliveryTime() {
  const { deliveryTime } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>entrega</Card.Title>

        <Card.Button>
          <Pencil />
        </Card.Button>
      </Card.Header>

      <Card.Description>{deliveryTime}</Card.Description>
    </Card.Root>
  )
}
