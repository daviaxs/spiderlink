import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../../create-product-form/ProductForm.style'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { ProductsContext } from '@/shared/contexts/Products'

interface UpdateProductTextareaProps {
  title: string
  name: string
  placeholder?: string
  productId: string
}

export function UpdateProductTextarea({
  title,
  name,
  placeholder,
  productId,
}: UpdateProductTextareaProps) {
  const [defaultValue, setDefaultValue] = useState('')
  const { products } = useContext(ProductsContext)

  useEffect(() => {
    const product = products.find((product) => product.id === productId)

    if (product) {
      setDefaultValue(product.description)
    }
  }, [productId, products])

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDefaultValue(event.target.value)
  }

  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <textarea
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={defaultValue}
      />
    </InputRoot>
  )
}
