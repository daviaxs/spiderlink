import { Text } from '@/shared/components/text/Text'
import {
  ProductCardRootStyle,
  ProductOption,
  ProductOptions,
  ProductSubsection,
} from './ProductCart.style'
import { ProductProps } from '@/shared/contexts/cart-context/interfaces'
import { Separator } from '@/shared/components/separator/Separator.style'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { v4 as uuid } from 'uuid'
import React, { Fragment } from 'react'

interface ProductCardRootProps {
  product: ProductProps
}

export function ProductCardRoot({ product }: ProductCardRootProps) {
  return (
    <ProductCardRootStyle>
      <Text as="h4" size={20} $weight="600">
        {product.name}
      </Text>

      {product.Subsection?.map((subsection) => {
        const hasSelectedOptions = subsection.Options?.some(
          (option) => option.quantity > 0,
        )

        if (!hasSelectedOptions) return null

        return (
          <Fragment key={`${subsection.id}-${uuid()}`}>
            <ProductSubsection>
              <Text as="h6" size={16} $weight="600">
                {subsection.name}
              </Text>
              <ProductOptions>
                {subsection.Options?.map((option) => {
                  if (option.quantity === 0) return null

                  return (
                    <ProductOption key={`${option.id}-${uuid()}`}>
                      <Text size={16} $weight="500">
                        • {option.name} - QT: {option.quantity} -{' '}
                        {convertPriceToBRFormat(option.price)}
                      </Text>
                    </ProductOption>
                  )
                })}
              </ProductOptions>
            </ProductSubsection>
            {product.Subsection &&
              product.Subsection?.indexOf(subsection) !==
                product.Subsection.length - 1 && (
                <Separator direction="horizontal" />
              )}
          </Fragment>
        )
      })}

      <Text
        size={20}
        $weight="500"
        fontVariant="all-small-caps"
        className="total-price"
      >
        total: {convertPriceToBRFormat(product.totalProductPrice)}
      </Text>
    </ProductCardRootStyle>
  )
}