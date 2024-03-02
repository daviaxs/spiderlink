import { Text } from '@/shared/components/text/Text'
import { FooterCartInfos, FooterCartStyle } from './FooterCart.style'
import { useContext, useEffect, useState } from 'react'
import { ECOMMERCE_NAME } from '@/shared/constants/names'
import { ProductProps } from '@/shared/contexts/cart-context/interfaces'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { CartContext } from '@/shared/contexts/cart-context/CartContext'
import { Check } from 'lucide-react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'

export function FooterCart() {
  const [productsInCart, setProductsInCart] = useState<ProductProps[]>([])
  const { addProduct, removeProduct } = useContext(CartContext)
  const { deliveryCost } = useContext(DomainInfosContext)

  useEffect(() => {
    const productsCart = JSON.parse(
      localStorage.getItem(`${ECOMMERCE_NAME}-products-cart`) || '[]',
    )

    if (productsCart) {
      setProductsInCart(productsCart)
    }
  }, [addProduct, removeProduct])

  function getTotalPrice() {
    return productsInCart.reduce((acc, product) => {
      if (product.productQuantity === undefined) return acc

      return acc + Number(product.totalProductPrice) + deliveryCost
    }, 0)
  }

  return (
    <FooterCartStyle>
      <FooterCartInfos>
        <Text size={14} $weight="600">
          Frete: {convertPriceToBRFormat(deliveryCost)}
        </Text>
        <Text size={18} $weight="600">
          Total: {convertPriceToBRFormat(getTotalPrice())}
        </Text>
      </FooterCartInfos>

      <ButtonForm
        size="normal"
        style={{ borderRadius: '4px', paddingInline: '2rem' }}
      >
        Finalizar <Check size={18} />
      </ButtonForm>
    </FooterCartStyle>
  )
}
