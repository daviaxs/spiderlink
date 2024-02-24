'use client'

import { ProductsContext } from '@/shared/contexts/Products'
import { useParams } from 'next/navigation'
import { useContext, useEffect } from 'react'

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
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  )
}
