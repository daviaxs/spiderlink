'use client'

import { useContext } from 'react'
import { Text } from '../text/Text'
import {
  FooterContent,
  FooterContentInfo,
  FooterCopyright,
  FooterHeader,
  FooterRoot,
} from './Footer.style'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'
import { useTheme } from 'styled-components'
import { Separator } from '../separator/Separator.style'
import { SpiderLink } from '@/shared/assets/svgs/SpiderLink'
import Link from 'next/link'
import { ECOMMERCE_PHONE } from '@/shared/constants/names'

export function Footer() {
  const { name, address } = useContext(DomainInfosContext)
  const theme = useTheme()

  return (
    <FooterRoot>
      <FooterHeader>
        <Text as="h2" size={20} $weight="800">
          {name}
        </Text>

        <Text size={16} $weight="600" color={theme.description}>
          {address}
        </Text>
      </FooterHeader>

      <Separator direction="horizontal" className="separator" />

      <FooterContent>
        <FooterContentInfo>
          <Text as="h6" size={20} $weight="800" color={theme.title}>
            Ecommerce
          </Text>

          <Link href={`https://wa.me/${ECOMMERCE_PHONE}`} target="_blank">
            <Text size={18} $weight="500" color={theme.description}>
              Whatsapp
            </Text>
          </Link>

          <Link href={`/`}>
            <Text size={18} $weight="500" color={theme.description}>
              Produtos
            </Text>
          </Link>
        </FooterContentInfo>

        <FooterContentInfo>
          <Text as="h6" size={20} $weight="800" color={theme.title}>
            SpiderLink
          </Text>

          <Link href={`https://wa.me/+558296041284`} target="_blank">
            <Text size={18} $weight="500" color={theme.description}>
              Fale conosco
            </Text>
          </Link>
        </FooterContentInfo>
      </FooterContent>

      <Separator direction="horizontal" className="separator" />

      <FooterCopyright>
        <SpiderLink color={theme.icon} />
        <Text size={16} $weight="600" color={theme.description}>
          © Copyright 2024 - SpiderLink - Todos os direitos reservados.
        </Text>
      </FooterCopyright>
    </FooterRoot>
  )
}
