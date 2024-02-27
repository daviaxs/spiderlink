import { ReactNode } from 'react'
import { ProductInfosStyle } from './ProductItem.style'

type ProductInfosProps = {
  children: ReactNode
}

export function ProductInfos({ children }: ProductInfosProps) {
  return <ProductInfosStyle>{children}</ProductInfosStyle>
}
