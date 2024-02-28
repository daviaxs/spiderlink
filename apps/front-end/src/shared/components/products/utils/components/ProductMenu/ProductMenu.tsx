'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useTheme } from 'styled-components'
import {
  Close,
  Content,
  MenuContent,
  MenuHeader,
  Overlay,
  ProductInfoRoot,
  SubsectionsRoot,
  Trigger,
} from './ProductMenu.style'
import { ProductItem } from '../ProductItem/ProductItem'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { Text } from '@/shared/components/text/Text'
import Image from 'next/image'
import { useContext } from 'react'
import { SubsectionsContext } from '@/shared/contexts/Subsections'
import { SubsectionAccordion } from './utils/components/subsection-accordion/SubsectionAccordion'

interface ProductMenuProps {
  product: {
    id: string
    name: string
    description: string
    price: number | string
    img: string
  }
}

export function ProductMenu({ product }: ProductMenuProps) {
  const theme = useTheme()
  const { setProductId, subsections } = useContext(SubsectionsContext)

  function handleOpenMenu() {
    setProductId(product.id)
  }

  return (
    <Dialog.Root>
      <Trigger onClick={handleOpenMenu}>
        <ProductItem.Root key={product.id}>
          <ProductItem.Infos>
            <ProductItem.Title>{product.name}</ProductItem.Title>
            <ProductItem.Description>
              {product.description}
            </ProductItem.Description>
            <ProductItem.Price>
              {convertPriceToBRFormat(product.price as number)}
            </ProductItem.Price>
          </ProductItem.Infos>

          <ProductItem.Image src={product.img} />
        </ProductItem.Root>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <MenuHeader>
            <Text size={18} $weight="500">
              {product.name}
            </Text>

            <Close>
              <X size={30} color={theme.icon} />
            </Close>
          </MenuHeader>

          <MenuContent>
            <ProductInfoRoot>
              <Image
                src={product.img}
                alt={product.name}
                className="product-image"
                width={140}
                height={140}
              />

              <div className="infos">
                <Text size={14} className="description">
                  {product.description}
                </Text>

                <Text size={16} $weight="500">
                  {convertPriceToBRFormat(product.price as number)}
                </Text>
              </div>
            </ProductInfoRoot>

            <SubsectionsRoot>
              <SubsectionAccordion subsections={subsections} />
            </SubsectionsRoot>
          </MenuContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
