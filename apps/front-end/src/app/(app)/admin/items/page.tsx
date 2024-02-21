'use client'

import { CategoriesListRoot, ItemsPageRoot } from './ItemsPage.style'
import { AddCategory } from './utils/components/add-category/AddCategory'
import { Skeleton } from '@/shared/components/skeleton/Skeleton'
import { CategoryItem } from './utils/components/category-item'
import { Separator } from '@/shared/components/separator/Separator.style'
import { ExternalLink } from 'lucide-react'
import { useContext } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'
import { DeleteCategory } from './utils/components/delete-category/DeleteCategory'
import Link from 'next/link'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'

const skeletonArray = Array.from({ length: 10 })

export default function ItemsPage() {
  const { categories, loading } = useContext(CategoriesContext)

  return (
    <ItemsPageRoot>
      <AddCategory />

      <SeparatorWithName name="Categorias" />

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
                  <Link href={`/admin/items/categorias/${category.id}`}>
                    <CategoryItem.Button>
                      <ExternalLink />
                    </CategoryItem.Button>
                  </Link>

                  <DeleteCategory id={category.id} name={category.name} />
                </CategoryItem.Actions>
              </CategoryItem.Root>
            ))}
      </CategoriesListRoot>
    </ItemsPageRoot>
  )
}
