'use client'

import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'

export function Name() {
  const { name } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Header>
    </Card.Root>
  )
}
