import { CategoryItemRoot } from '../Categorys.style'
import { Text } from '../../text/Text'
import Link from 'next/link'
import { useSelectCategory } from '@/shared/hooks/useSelectCategory'
import { getCategoryIcon } from './GetCategoryIcon'
import { CategoryNames } from '@/categoryNames'

interface CategoryItemProps {
  id: string
  title: CategoryNames
}

export function CategoryItem({ title, id }: CategoryItemProps) {
  const { focus, handleClick } = useSelectCategory(id)

  return (
    <Link href={`?category=${id}`} passHref scroll={false}>
      <CategoryItemRoot onClick={handleClick} className={focus ? 'focus' : ''}>
        {getCategoryIcon(title)}

        <Text size={16} $weight="500">
          {title}
        </Text>
      </CategoryItemRoot>
    </Link>
  )
}
