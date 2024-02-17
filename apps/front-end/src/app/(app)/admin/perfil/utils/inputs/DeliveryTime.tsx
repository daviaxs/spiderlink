'use client'

import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { DeliveryTimeForm } from '../components/forms/DeliveryTimeForm'

export function DeliveryTime() {
  const { deliveryTime } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>entrega</Card.Title>

        <DeliveryTimeForm />
      </Card.Header>

      <Card.Description>{deliveryTime}</Card.Description>
    </Card.Root>
  )
}
