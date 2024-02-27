'use client'

import { Plus } from 'lucide-react'
import { AddCategoryButtonRoot, Content, Item } from './AddCategory.style'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Text } from '@/shared/components/text/Text'
import { useTheme } from 'styled-components'
import categories from '@/categories.json'
import { useContext } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'

interface Category {
  name: string
}

export function AddCategory() {
  const theme = useTheme()
  const {
    addCategory,
    categories: existingCategories,
    loading,
  } = useContext(CategoriesContext)

  const existingCategoryNames = existingCategories.map(
    (category: Category) => category.name,
  )

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild disabled={loading}>
        <AddCategoryButtonRoot>
          {loading ? (
            <Text size={20} $weight="700">
              Atualizando categorias...
            </Text>
          ) : (
            <>
              <Plus color={theme.icon} />
              <Text size={20} $weight="700">
                Adicionar <span>categoria</span>
              </Text>
            </>
          )}
        </AddCategoryButtonRoot>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        {loading ? (
          <Content>
            <Text size={14} $weight="500">
              Carregando...
            </Text>
          </Content>
        ) : (
          <Content sideOffset={10}>
            {categories.map(
              (category) =>
                !existingCategoryNames.includes(category.name) && (
                  <Item
                    key={category.name}
                    className="DropdownMenuItem"
                    onClick={() => addCategory(category.name)}
                  >
                    {category.name}
                  </Item>
                ),
            )}
          </Content>
        )}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
