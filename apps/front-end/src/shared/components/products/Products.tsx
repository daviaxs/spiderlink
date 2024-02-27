'use client'

import { ProductsRoot } from './Products.style'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '@/shared/contexts/Products'
import { useSearchParams } from 'next/navigation'
import { ProductsSkeletonRoot } from './utils/ProductsSkeleton.style'
import { Skeleton } from '../skeleton/Skeleton'
import { ProductMenu } from './utils/components/ProductMenu/ProductMenu'

const skeletons = Array.from({ length: 4 })

export function Products() {
  const { products, setCategoryId } = useContext(ProductsContext)
  const searchParams = useSearchParams()

  const categoryId = searchParams.get('category')

  useEffect(() => {
    if (categoryId) {
      setCategoryId(categoryId)
    }
  }, [categoryId, setCategoryId])

  return products.length > 0 ? (
    <ProductsRoot>
      {products.map((product) => (
        <ProductMenu key={product.id} product={product} />
      ))}
    </ProductsRoot>
  ) : (
    <ProductsSkeletonRoot>
      {skeletons.map((_, index) => (
        <Skeleton
          key={index}
          height="11rem"
          width="100%"
          $borderRadius={0.375}
        />
      ))}
    </ProductsSkeletonRoot>
  )
}
