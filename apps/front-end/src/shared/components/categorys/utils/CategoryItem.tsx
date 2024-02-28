import { CategoryItemRoot } from '../Categorys.style'
import { Text } from '../../text/Text'
import { useSelectCategory } from '@/shared/hooks/useSelectCategory'
import { getCategoryIcon } from './GetCategoryIcon'
import { CategoryNames } from '@/categoryNames'

interface CategoryItemProps {
  id: string
  title: CategoryNames
  focusId: string
  categories: { id: string }[]
  setFocusId: (id: string) => void
}

export function CategoryItem({
  title,
  id,
  focusId,
  setFocusId,
  categories,
}: CategoryItemProps) {
  const { isFocused, handleClick } = useSelectCategory(
    id,
    focusId,
    setFocusId,
    categories,
  )

  return (
    <li style={{ cursor: 'pointer', listStyle: 'none' }}>
      <CategoryItemRoot
        onClick={handleClick}
        className={isFocused ? 'focus' : ''}
      >
        {getCategoryIcon(title)}

        <Text size={16} $weight="500">
          {title}
        </Text>
      </CategoryItemRoot>
    </li>
  )
}
