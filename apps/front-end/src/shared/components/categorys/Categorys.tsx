import { Text } from '../text/Text'
import { CategorysRoot } from './Categorys.style'
import { CategoryList } from './utils/CategoryList'

export function Categorys() {
  return (
    <CategorysRoot>
      <Text as="h2" size={24}>
        <span className="desktop">Explore novas categorias</span>
        <span className="mobile">Explorar</span>
      </Text>

      <CategoryList />
    </CategorysRoot>
  )
}
