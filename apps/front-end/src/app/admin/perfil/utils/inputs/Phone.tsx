'use client'

import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { convertToPhoneBRFormat } from '@/shared/functions/convertToPhoneBRFormat'
import { PhoneForm } from '../components/forms/PhoneForm'

export function Phone() {
  const { phone } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>telefone</Card.Title>

        <PhoneForm />
      </Card.Header>

      <Card.Description>{convertToPhoneBRFormat(phone)}</Card.Description>
    </Card.Root>
  )
}
