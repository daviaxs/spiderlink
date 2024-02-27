import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface ProductImageProps {
  src: string | StaticImport
}

export function ProductImage({ src }: ProductImageProps) {
  return (
    <Image
      src={src}
      alt="imagem do produto"
      width={150}
      height={137}
      className="product-image"
      priority
    />
  )
}
