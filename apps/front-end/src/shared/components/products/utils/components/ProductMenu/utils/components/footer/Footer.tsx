import { FooterActions, FooterProductButton, FooterRoot } from './Footer.style'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { Text } from '@/shared/components/text/Text'
import { CartContext } from '@/shared/contexts/cart-context/CartContext'
import {
  ProductProps,
  SubsectionProps,
} from '@/shared/contexts/cart-context/interfaces'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { Minus, Plus } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

interface FooterProps {
  productId: string
  product: ProductProps
  subsections: SubsectionProps[]
}

export function Footer({ productId, product, subsections }: FooterProps) {
  const theme = useTheme()
  const {
    addProductQuantity,
    removeProductQuantity,
    productQuantity,
    addProduct,
    optionQuantity,
  } = useContext(CartContext)

  const [totalPrice, setTotalPrice] = useState(product.price)

  useEffect(() => {
    let totalOptionPrice = 0
    subsections.forEach((subsection) =>
      subsection.Options?.forEach((option) => {
        if (optionQuantity[`${product.id}-${option.id}`] > 0) {
          totalOptionPrice +=
            option.price * optionQuantity[`${product.id}-${option.id}`]
        }
      }),
    )

    const totalProductPrice =
      (Number(product.price) + totalOptionPrice) * productQuantity[product.id]
    setTotalPrice(totalProductPrice)
  }, [product.id, product.price, subsections, optionQuantity, productQuantity])

  return (
    <FooterRoot>
      <FooterActions>
        <FooterProductButton
          onClick={() => removeProductQuantity(productId)}
          disabled={productQuantity[productId] === 1}
        >
          <Minus />
        </FooterProductButton>

        <Text size={16} $weight="500">
          {productQuantity[productId] || 1}
        </Text>

        <FooterProductButton
          onClick={() => addProductQuantity(productId)}
          disabled={productQuantity[productId] === 999}
        >
          <Plus />
        </FooterProductButton>
      </FooterActions>

      <ButtonForm
        size="normal"
        type="button"
        onClick={() => addProduct(product, subsections)}
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '4px',
          width: '12rem',
        }}
      >
        <Text size={16} $weight="500" color={theme.white}>
          Adicionar
        </Text>

        <Text
          size={14}
          $weight="500"
          color={theme.white}
          style={{ marginTop: '2px' }}
        >
          {convertPriceToBRFormat(Number(totalPrice) || Number(product.price))}
        </Text>
      </ButtonForm>
    </FooterRoot>
  )
}
