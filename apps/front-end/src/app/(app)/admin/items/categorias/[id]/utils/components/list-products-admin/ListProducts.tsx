import { Skeleton } from '@/shared/components/skeleton/Skeleton'
import { ProductsContext } from '@/shared/contexts/Products'
import { useContext } from 'react'
import {
  ListProductsAdminRoot,
  ProductActions,
  ProductCardAdmin,
  ProductFooter,
  ProductInfo,
} from './ListProducts.style'
import Image from 'next/image'
import { Text } from '@/shared/components/text/Text'
import { Separator } from '@/shared/components/separator/Separator.style'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { ExternalLink, Pencil } from 'lucide-react'
import { DeleteProductForm } from './utils/DeleteProductForm'

export function ListProductsAdmin() {
  const { products, loading } = useContext(ProductsContext)

  function formatDescription(description: string) {
    if (description.length > 70) {
      return `${description.slice(0, 70)}...`
    }

    return description
  }

  function slicePrice(price: number) {
    const priceString = price.toString()
    if (priceString.length > 5) {
      return parseFloat(priceString.slice(0, 5))
    }
    return price
  }

  return (
    <ListProductsAdminRoot>
      {loading
        ? Array.from({ length: 20 }).map((_, index) => (
            <Skeleton
              key={index}
              width="320px"
              height="330px"
              $borderRadius={0.375}
            />
          ))
        : products.map((product) => (
            <ProductCardAdmin key={product.id}>
              <Image
                src={product.img}
                alt="foto produto"
                width={150}
                height={137}
                className="product-image"
                priority
              />

              <ProductInfo>
                <Text size={24} as="h2" className="product-name">
                  {product.name}
                </Text>

                <Text size={16} className="product-description">
                  {formatDescription(product.description)}
                </Text>
              </ProductInfo>

              <Separator direction="horizontal" />

              <ProductFooter
                $buttonWidth={product.price === 0 ? '100%' : 'fit-content'}
              >
                {product.price !== 0 && (
                  <Text size={24} $weight="600">
                    {convertPriceToBRFormat(
                      slicePrice(product.price as number),
                    )}
                    {product.price.toString().length > 5 && '...'}
                  </Text>
                )}

                <ProductActions>
                  <ButtonForm size="full">
                    <ExternalLink />
                  </ButtonForm>
                  <ButtonForm size="full">
                    <Pencil />
                  </ButtonForm>
                </ProductActions>
              </ProductFooter>

              <DeleteProductForm name={product.name} productId={product.id} />
            </ProductCardAdmin>
          ))}
    </ListProductsAdminRoot>
  )
}
