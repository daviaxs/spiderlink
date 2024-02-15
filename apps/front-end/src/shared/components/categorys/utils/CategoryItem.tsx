import { Pizza } from 'lucide-react'
import { CategoryItemRoot } from '../Categorys.style'
import { Text } from '../../text/Text'

export function CategoryItem() {
  return (
    <CategoryItemRoot>
      <Pizza />
      <Text size={16} $weight="500">
        Pizzas
      </Text>
    </CategoryItemRoot>
  )
}
