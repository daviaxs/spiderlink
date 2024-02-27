'use client'

import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { ProductsRoot } from './Products.style'
import { ProductItem } from './utils/components/ProductItem/ProductItem'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '@/shared/contexts/Products'
import { useSearchParams } from 'next/navigation'
import { ProductsSkeletonRoot } from './utils/ProductsSkeleton.style'
import { Skeleton } from '../skeleton/Skeleton'

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
        <ProductItem.Root key={product.id}>
          <ProductItem.Infos>
            <ProductItem.Title>{product.name}</ProductItem.Title>
            <ProductItem.Description>
              {product.description}
            </ProductItem.Description>
            <ProductItem.Price>
              {convertPriceToBRFormat(product.price as number)}
            </ProductItem.Price>
          </ProductItem.Infos>

          <ProductItem.Image src={product.img} />
        </ProductItem.Root>
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
