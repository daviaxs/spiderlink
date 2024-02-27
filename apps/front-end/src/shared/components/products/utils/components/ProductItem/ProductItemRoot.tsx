import { ReactNode } from 'react'
import { ProductItemRootStyle } from './ProductItem.style'

interface ProductItemRootProps {
  children: ReactNode
}

export function ProductItemRoot({ children }: ProductItemRootProps) {
  return <ProductItemRootStyle>{children}</ProductItemRootStyle>
}
