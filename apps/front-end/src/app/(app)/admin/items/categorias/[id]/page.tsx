'use client'

import { useParams } from 'next/navigation'
import { CategoryPageRoot } from './CategoryPage.style'
import { useContext, useEffect } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'
import { Toolbar } from './utils/components/toolbar'
import { CreateProductForm } from './utils/components/create-product-form/CreateProductForm'
import { ProductsContext } from '@/shared/contexts/Products'
import { Skeleton } from '@/shared/components/skeleton/Skeleton'

export default function CategoryPage() {
  let { id } = useParams()
  const { categories } = useContext(CategoriesContext)

  const { products, fetchProducts, loading } = useContext(ProductsContext)

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

      <div
        style={{
          width: '100%',
          gap: '1rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Skeleton
                key={index}
                width="100%"
                height="3rem"
                $borderRadius={0.375}
              />
            ))
          : products.map((product) => (
              <div key={product.id}>{product.name}</div>
            ))}
      </div>
    </CategoryPageRoot>
  )
}
