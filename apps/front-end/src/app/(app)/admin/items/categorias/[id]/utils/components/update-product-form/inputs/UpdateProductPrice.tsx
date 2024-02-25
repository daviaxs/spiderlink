import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Text } from '@/shared/components/text/Text'
import { ProductsContext } from '@/shared/contexts/Products'
import { InputRoot } from '@/shared/components/inputs/Inputs.style'

interface UpdateProductPriceProps {
  title: string
  name: string
  placeholder?: string
  productId: string
}

export function UpdateProductPrice({
  title,
  name,
  placeholder,
  productId,
}: UpdateProductPriceProps) {
  const [inputValue, setInputValue] = useState('')

  const { products } = useContext(ProductsContext)

  useEffect(() => {
    const product = products.find((product) => product.id === productId)

    if (product) {
      const oldPrice = product.price.toString()
      const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(oldPrice) / 100)

      setInputValue(formattedPrice)
    }
  }, [productId, products])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let numericValue = event.target.value.replace(/[^0-9]/g, '')

    if (numericValue.length === 0) {
      numericValue = '0'
    }

    if (numericValue.length > 10) {
      numericValue = numericValue.slice(0, 10)
    }

    if (numericValue !== '') {
      const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseInt(numericValue) / 100)

      setInputValue(formattedValue)
    }
  }

  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <input
        type="text"
        name={name}
        id={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputRoot>
  )
}
