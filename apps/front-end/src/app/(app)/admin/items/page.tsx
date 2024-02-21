'use client'

import { Text } from '@/shared/components/text/Text'
import {
  CategoriesListRoot,
  ItemsPageRoot,
  SeparatorCategories,
} from './ItemsPage.style'
import { AddCategory } from './utils/components/add-category/AddCategory'
import { Skeleton } from '@/shared/components/skeleton/Skeleton'
import { CategoryItem } from './utils/components/category-item'
import { Separator } from '@/shared/components/separator/Separator.style'
import { ExternalLink, Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'

const skeletonArray = Array.from({ length: 10 })

export default function ItemsPage() {
  const { categories, loading } = useContext(CategoriesContext)

  return (
    <ItemsPageRoot>
      <AddCategory />

      <SeparatorCategories>
        <span className="line" />
        <Text size={18} $weight="700" className="text">
          Categorias
        </Text>
        <span className="line" />
      </SeparatorCategories>

      <CategoriesListRoot>
        {loading
          ? skeletonArray.map((_, index) => (
              <Skeleton
                key={index}
                width="100%"
                height="3rem"
                $borderRadius={0.375}
              />
            ))
          : categories.map((category) => (
              <CategoryItem.Root key={category.id}>
                <CategoryItem.Name>{category.name}</CategoryItem.Name>

                <Separator direction="vertical" />

                <CategoryItem.Actions>
                  <CategoryItem.Button>
                    <ExternalLink />
                  </CategoryItem.Button>

                  <CategoryItem.Button>
                    <Trash2 />
                  </CategoryItem.Button>
                </CategoryItem.Actions>
              </CategoryItem.Root>
            ))}
      </CategoriesListRoot>
    </ItemsPageRoot>
  )
}
