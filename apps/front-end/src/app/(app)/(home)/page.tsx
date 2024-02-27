import { Categorys } from '@/shared/components/categorys/Categorys'
import { Root } from './HomePage.style'
import { ApresentationRoot } from './utils/components/Apresentation'
import { InfosBadges } from './utils/infos-badges/InfosBadges'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'
import { Products } from '@/shared/components/products/Products'

export default function Home() {
  return (
    <Root>
      <ApresentationRoot />

      <InfosBadges />

      <Categorys />

      <div style={{ padding: '1rem 2rem' }}>
        <SeparatorWithName name="Produtos" />
      </div>

      <Products />
    </Root>
  )
}
