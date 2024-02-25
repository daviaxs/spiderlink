'use client'

import { SubsectionsContext } from '@/shared/contexts/Subsections'
import { useParams } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { SubsectionPageRoot } from './SubsectionPage.style'
import { Toolbar } from '@/shared/components/toolbar'
import { CreateOptionForm } from './utils/components/create-option-form/CreateOptionForm'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'

export default function SubsectionPage() {
  const { id, productId, subsectionId } = useParams()
  const { subsections, loading, setProductId } = useContext(SubsectionsContext)

  useEffect(() => {
    if (productId) {
      setProductId(productId as string)
    }
  }, [productId, setProductId])

  const subsection = subsections.find(
    (subsection) => subsection.id === subsectionId,
  )

  const name = subsection?.name || 'Carregando...'

  return (
    <SubsectionPageRoot>
      <Toolbar.Root>
        <Toolbar.Title>{name}</Toolbar.Title>

        <Toolbar.Actions>
          <CreateOptionForm
            categoryId={id as string}
            productId={productId as string}
            subsectionId={subsectionId as string}
          />
        </Toolbar.Actions>
      </Toolbar.Root>

      <SeparatorWithName name="Opções" />
    </SubsectionPageRoot>
  )
}
