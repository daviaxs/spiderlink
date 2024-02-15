import { Text } from '../text/Text'
import { CategorysRoot } from './Categorys.style'
import { CategoryList } from './utils/CategoryList'

export function Categorys() {
  return (
    <CategorysRoot>
      <Text as="h2" size={24}>
        Explore novas categorias
      </Text>

      <CategoryList />
    </CategorysRoot>
  )
}
