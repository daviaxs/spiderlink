'use client'

import { useContext, useState } from 'react'
import {
  CategoryListRoot,
  CategoryScroll,
  CategoryShadow,
} from '../Categorys.style'
import { CategoryItem } from './CategoryItem'
import { CategoriesContext } from '@/shared/contexts/Categories'
import { Skeleton } from '../../skeleton/Skeleton'

const skeletons = Array.from({ length: 10 })

export function CategoryList() {
  const { categories } = useContext(CategoriesContext)
  const [focusId, setFocusId] = useState('')

  return (
    <CategoryListRoot>
      <CategoryScroll>
        {categories.length === 0
          ? skeletons.map((_, index) => (
              <Skeleton
                key={index}
                height="85px"
                width="90px"
                $borderRadius={0.375}
              />
            ))
          : categories.map((category) => (
              <CategoryItem
                key={category.id}
                title={category.name}
                id={category.id}
                focusId={focusId}
                setFocusId={setFocusId}
                categories={categories}
              />
            ))}
      </CategoryScroll>

      <CategoryShadow />
    </CategoryListRoot>
  )
}
