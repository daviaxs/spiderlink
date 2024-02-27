import Image from 'next/image'
import { ProductInfosStyle, ProductItemRootStyle } from './ProductItem.style'
import pizzaImg from './pizza.jpg'
import { Text } from '@/shared/components/text/Text'

export function ProductItemRoot() {
  return (
    <ProductItemRootStyle>
      <ProductInfosStyle>
        <Text as="h2" size={24} $weight="600">
          Titulo
        </Text>

        <Text size={14} className="product-description" $lineheight="120%">
          (hambúrguer, queijo, presunto, ovo, bacon, calabresa, salsicha, frango
          e salada)x xx fghg xxx 558 xx
        </Text>

        <Text size={16} $weight="500">
          A partir de R$ 25,99
        </Text>
      </ProductInfosStyle>

      <Image
        src={pizzaImg}
        alt="imagem"
        width={150}
        height={137}
        className="product-image"
        priority
      />
    </ProductItemRootStyle>
  )
}
