import { Categorys } from '@/shared/components/categorys/Categorys'
import { Root } from './HomePage.style'
import { ApresentationRoot } from './utils/components/Apresentation'
import { InfosBadges } from './utils/infos-badges/InfosBadges'

export default function Home() {
  return (
    <Root>
      <ApresentationRoot />

      <InfosBadges />

      <Categorys />
    </Root>
  )
}
