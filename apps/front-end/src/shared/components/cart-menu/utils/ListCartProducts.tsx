import { ProductProps } from '@/shared/contexts/cart-context/interfaces'
import { Fragment, useEffect, useState } from 'react'
import { getLocalStorageItem } from '@/shared/functions/localStorage'
import { ProductCardRoot } from './components/product-cart/ProductCartRoot'
import { Separator } from '../../separator/Separator.style'
import { v4 as uuid } from 'uuid'
import { ECOMMERCE_NAME } from '@/shared/constants/names'

export function ListCartProducts() {
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    const productsCart = getLocalStorageItem(`${ECOMMERCE_NAME}-products-cart`)

    if (productsCart) {
      setCartProducts(productsCart)
    }
  }, [])

  return (
    <ul
      style={{
        width: '100%',
        gap: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        height: '100%',
      }}
    >
      {cartProducts.map((product) => (
        <Fragment key={`${product.id}-${uuid()}`}>
          <ProductCardRoot product={product} />

          {cartProducts.indexOf(product) !== cartProducts.length - 1 && (
            <Separator direction="horizontal" />
          )}
        </Fragment>
      ))}
    </ul>
  )
}
