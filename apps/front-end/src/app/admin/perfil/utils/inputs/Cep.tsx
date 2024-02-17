'use client'

import { Card } from '../components/card'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { convertToCep } from '@/shared/functions/convertToCep'
import { CepForm } from '../components/forms/CepForm'

export function Cep() {
  const { cep } = useContext(DomainInfosContext)

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>cep</Card.Title>

        <CepForm />
      </Card.Header>

      <Card.Description>{convertToCep(cep)}</Card.Description>
    </Card.Root>
  )
}
