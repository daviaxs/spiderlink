'use client'

import { Text } from '@/shared/components/text/Text'
import {
  CategoriesListRoot,
  ItemsPageRoot,
  SeparatorCategories,
} from './ItemsPage.style'
import { AddCategory } from './utils/components/add-category/AddCategory'
import { useGetCategories } from '@/shared/hooks/useGetCategories'
import { Skeleton } from '@/shared/components/skeleton/Skeleton'
import { CategoryItem } from './utils/components/category-item'
import { Separator } from '@/shared/components/separator/Separator.style'
import { ExternalLink, Trash2 } from 'lucide-react'

const skeletonArray = Array.from({ length: 10 })

export default function ItemsPage() {
  const categories = useGetCategories()

  const categoriesData = categories.categories
  const loadingCategories = categories.loading

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
        {loadingCategories
          ? skeletonArray.map((_, index) => (
              <Skeleton
                key={index}
                width="100%"
                height="3rem"
                $borderRadius={0.375}
              />
            ))
          : categoriesData.map((category) => (
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
