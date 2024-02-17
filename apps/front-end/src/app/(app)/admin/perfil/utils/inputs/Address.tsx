'use client'

import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { AddressForm } from '../components/forms/AddressForm'

export function Address() {
  const { address } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>endereço</Card.Title>

        <AddressForm />
      </Card.Header>

      <Card.Description>
        {address.substring(0, 40)}
        {address.length > 40 && '...'}
      </Card.Description>
    </Card.Root>
  )
}
