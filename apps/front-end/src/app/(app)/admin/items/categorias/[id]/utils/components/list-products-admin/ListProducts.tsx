import { Skeleton } from '@/shared/components/skeleton/Skeleton'
import { ProductsContext } from '@/shared/contexts/Products'
import { useContext, useEffect } from 'react'
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
import { ExternalLink } from 'lucide-react'
import { DeleteProductForm } from './utils/DeleteProductForm'
import { UpdateProductForm } from '../update-product-form/UpdateProductForm'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function ListProductsAdmin() {
  const { products, loading, setCategoryId } = useContext(ProductsContext)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      setCategoryId(id as string)
    }
  }, [id, setCategoryId])

  function formatDescription(description: string) {
    if (description.length > 70) {
      return `${description.slice(0, 70)}...`
    }

    return description
  }

  function formatPrice(price: number) {
    const formattedPrice = convertPriceToBRFormat(price)

    if (formattedPrice.length > 10) {
      return `${formattedPrice.slice(0, 10)}...`
    }

    return formattedPrice
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
                    {formatPrice(product.price as number)}
                  </Text>
                )}

                <ProductActions>
                  <Link
                    href={`/admin/items/categorias/${id}/produtos/${product.id}`}
                    style={
                      product.price === 0
                        ? { width: '100%' }
                        : { width: 'fit-content' }
                    }
                  >
                    <ButtonForm size="full" name="ir-para-produto">
                      <ExternalLink />
                    </ButtonForm>
                  </Link>

                  <UpdateProductForm productId={product.id} />
                </ProductActions>
              </ProductFooter>

              <DeleteProductForm name={product.name} productId={product.id} />
            </ProductCardAdmin>
          ))}
    </ListProductsAdminRoot>
  )
}
