'use client'

import Image from 'next/image'
import { Apresentation, Banner, Infos, Texts } from './Apresentation.style'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/style/theme/fonts'
import { ViewMoreMenu } from '@/shared/components/view-more-menu/ViewMoreMenu'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'

export function ApresentationRoot() {
  const { name } = useContext(DomainInfosContext)

  return (
    <Apresentation>
      <Banner>
        <Image
          src="/banner.png"
          alt="banner"
          className="image"
          width={1800}
          height={300}
          priority
        />
      </Banner>

      <Infos>
        <Image
          src="/avatar.png"
          alt="perfil"
          width={150}
          height={150}
          className="avatar"
          priority
        />

        <Texts>
          <Text
            as="h1"
            size={32}
            $weight="800"
            className={`${inter.className} ecommerceName`}
          >
            {name}
          </Text>

          <ViewMoreMenu />
        </Texts>
      </Infos>
    </Apresentation>
  )
}
