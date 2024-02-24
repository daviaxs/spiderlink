import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../../create-product-form/ProductForm.style'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { ProductsContext } from '@/shared/contexts/Products'

interface UpdateProductInputProps {
  title: string
  name: string
  placeholder?: string
  productId: string
}

export function UpdateProductInput({
  title,
  name,
  placeholder,
  productId,
}: UpdateProductInputProps) {
  const { products } = useContext(ProductsContext)
  const [defaultValue, setDefaultValue] = useState('')

  useEffect(() => {
    const product = products.find((product) => product.id === productId)

    if (product) {
      setDefaultValue(product.name)
    }
  }, [products, productId, name])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDefaultValue(event.target.value)
  }

  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <input
        type="text"
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={defaultValue}
      />
    </InputRoot>
  )
}
