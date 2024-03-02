'use client'

import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { DeliveryCostForm } from '../components/forms/DeliveryCostForm '

export function DeliveryCost() {
  const { deliveryCost } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Custo de entrega</Card.Title>

        <DeliveryCostForm />
      </Card.Header>

      <Card.Description>
        {deliveryCost === 0
          ? 'Grátis'
          : `${convertPriceToBRFormat(deliveryCost)}`}
      </Card.Description>
    </Card.Root>
  )
}
