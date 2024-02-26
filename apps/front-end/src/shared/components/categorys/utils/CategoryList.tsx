'use client'

import { useContext } from 'react'
import {
  CategoryListRoot,
  CategoryScroll,
  CategoryShadow,
} from '../Categorys.style'
import { CategoryItem } from './CategoryItem'
import { CategoriesContext } from '@/shared/contexts/Categories'

export function CategoryList() {
  const { categories } = useContext(CategoriesContext)

  return (
    <CategoryListRoot>
      <CategoryScroll>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            title={category.name}
            id={category.id}
          />
        ))}
      </CategoryScroll>

      <CategoryShadow />
    </CategoryListRoot>
  )
}
