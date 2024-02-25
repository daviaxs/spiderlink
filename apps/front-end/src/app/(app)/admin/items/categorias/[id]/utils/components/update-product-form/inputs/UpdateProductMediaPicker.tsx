'use client'

import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { ProductsContext } from '@/shared/contexts/Products'
import { MediaPickerStyle } from '@/shared/components/inputs/Inputs.style'

interface UpdateProductMediaPickerProps {
  productId: string
}

export function UpdateProductMediaPicker({
  productId,
}: UpdateProductMediaPickerProps) {
  const { products } = useContext(ProductsContext)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    const product = products.find((product) => product.id === productId)

    if (product) {
      setPreview(product.img)
    }
  }, [productId, products])

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files || !files[0]) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="img"
        id="img"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
      />

      {preview && <MediaPickerStyle src={preview} alt="" />}
    </>
  )
}
