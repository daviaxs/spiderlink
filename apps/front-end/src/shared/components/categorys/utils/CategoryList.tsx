'use client'

import { useContext, useState } from 'react'
import {
  CategoryListRoot,
  CategoryScroll,
  CategoryShadow,
} from '../Categorys.style'
import { CategoryItem } from './CategoryItem'
import { CategoriesContext } from '@/shared/contexts/Categories'

export function CategoryList() {
  const { categories } = useContext(CategoriesContext)
  const [focusId, setFocusId] = useState('')

  return (
    <CategoryListRoot>
      <CategoryScroll>
        {categories.map((category) => (
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
