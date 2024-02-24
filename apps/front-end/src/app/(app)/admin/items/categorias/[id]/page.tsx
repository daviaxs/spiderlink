'use client'

import { useParams } from 'next/navigation'
import { CategoryPageRoot } from './CategoryPage.style'
import { useContext, useEffect } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'
import { Toolbar } from './utils/components/toolbar'
import { CreateProductForm } from './utils/components/create-product-form/CreateProductForm'
import { ProductsContext } from '@/shared/contexts/Products'
import { ListProductsAdmin } from './utils/components/list-products-admin/ListProducts'

export default function CategoryPage() {
  let { id } = useParams()
  const { categories } = useContext(CategoriesContext)

  const { fetchProducts } = useContext(ProductsContext)

  if (Array.isArray(id)) {
    id = id[0]
  }

  const category = categories.find((category) => category.id === id)
  const categoryName = category?.name || 'Carregando...'

  useEffect(() => {
    if (id) {
      fetchProducts(id as string)
    }
  }, [fetchProducts, id])

  return (
    <CategoryPageRoot>
      <Toolbar.Root>
        <Toolbar.Title>{categoryName}</Toolbar.Title>

        <Toolbar.Actions>
          <CreateProductForm categoryId={id} />
        </Toolbar.Actions>
      </Toolbar.Root>

      <SeparatorWithName name="Produtos" />

      <ListProductsAdmin categoryId={id} />
    </CategoryPageRoot>
  )
}
