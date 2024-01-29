import Image from 'next/image'
import { Apresentation, Banner, Infos, Root, Texts } from './HomePage.style'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/style/theme/fonts'

export default function Home() {
  return (
    <Root>
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
            <Text as="h1" size={32} $weight="800" className={inter.className}>
              SpiderLink - Asa - Avenida Rede dos Sites (asa)
            </Text>

            <Text
              size={20}
              $weight="700"
              className={inter.className}
              $whiteSpace="nowrap"
            >
              Ver mais
            </Text>
          </Texts>
        </Infos>
      </Apresentation>
    </Root>
  )
}
