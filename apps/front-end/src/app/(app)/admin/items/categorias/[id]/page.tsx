'use client'

import { useParams } from 'next/navigation'
import { CategoryPageRoot } from './CategoryPage.style'
import { useContext } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'
import { Toolbar } from '@/shared/components/toolbar'
import { CreateProductForm } from './utils/components/create-product-form/CreateProductForm'
import { ListProductsAdmin } from './utils/components/list-products-admin/ListProducts'

export default function CategoryPage() {
  let { id } = useParams()
  const { categories } = useContext(CategoriesContext)

  if (Array.isArray(id)) {
    id = id[0]
  }

  const category = categories.find((category) => category.id === id)
  const categoryName = category?.name || 'Carregando...'

  return (
    <CategoryPageRoot>
      <Toolbar.Root>
        <Toolbar.Title>{categoryName}</Toolbar.Title>

        <Toolbar.Actions>
          <CreateProductForm categoryId={id} />
        </Toolbar.Actions>
      </Toolbar.Root>

      <SeparatorWithName name="Produtos" />

      <ListProductsAdmin />
    </CategoryPageRoot>
  )
}
