'use client'

import { ProductsContext } from '@/shared/contexts/Products'
import { useParams } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { Glossary, GlossaryItem, ProductPageRoot } from './ProductPage.style'
import { Toolbar } from '@/shared/components/toolbar'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'
import { CreateSubsectionForm } from './utils/components/create-sebsection-form/CreateSubsectionForm'
import { ListSubsectionsAdmin } from './utils/components/list-subsections-admin/ListSubsections'

export default function ProductPage() {
  const { id, productId } = useParams()
  const { fetchProducts, products } = useContext(ProductsContext)

  useEffect(() => {
    if (id) {
      fetchProducts(id as string)
    }
  }, [fetchProducts, id])

  const product = products.find((product) => product.id === productId)

  return (
    <ProductPageRoot>
      <Toolbar.Root>
        <Toolbar.Title>{product?.name || 'Carregando...'}</Toolbar.Title>

        <Toolbar.Actions>
          <CreateSubsectionForm
            categoryId={id as string}
            productId={productId as string}
          />
        </Toolbar.Actions>
      </Toolbar.Root>

      <SeparatorWithName name="Subseções" />

      <Glossary>
        <GlossaryItem>LMT = Limite</GlossaryItem>
        <GlossaryItem>OBGT = Obrigatório</GlossaryItem>
        <GlossaryItem>MULT = Multipla escolha</GlossaryItem>
      </Glossary>

      <ListSubsectionsAdmin />
    </ProductPageRoot>
  )
}
