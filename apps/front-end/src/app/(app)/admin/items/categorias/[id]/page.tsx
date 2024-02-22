'use client'

import { useParams } from 'next/navigation'
import { CategoryPageRoot } from './CategoryPage.style'
import { useContext } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'
import { Toolbar } from './utils/components/toolbar'
import { CreateProductForm } from './utils/components/create-product-form/CreateProductForm'

export default function CategoryPage() {
  const { id } = useParams()
  const { categories } = useContext(CategoriesContext)

  const category = categories.find((category) => category.id === id)
  const categoryName = category?.name || 'Carregando...'

  return (
    <CategoryPageRoot>
      <Toolbar.Root>
        <Toolbar.Title>{categoryName}</Toolbar.Title>

        <Toolbar.Actions>
          <CreateProductForm />
        </Toolbar.Actions>
      </Toolbar.Root>

      <SeparatorWithName name="Produtos" />
    </CategoryPageRoot>
  )
}
