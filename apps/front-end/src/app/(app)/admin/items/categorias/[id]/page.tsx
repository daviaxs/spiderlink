'use client'

import { useParams } from 'next/navigation'
import { CategoryPageRoot } from './CategoryPage.style'
import { useContext } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'
import { SeparatorWithName } from '@/shared/components/separator/SeparatorWithName'
import { Toolbar } from './utils/components/toolbar'
import { Plus } from 'lucide-react'
import { Text } from '@/shared/components/text/Text'
import { useTheme } from 'styled-components'

export default function CategoryPage() {
  const theme = useTheme()
  const { id } = useParams()
  const { categories } = useContext(CategoriesContext)

  const category = categories.find((category) => category.id === id)
  const categoryName = category?.name || 'Carregando...'

  return (
    <CategoryPageRoot>
      <Toolbar.Root>
        <Toolbar.Title>{categoryName}</Toolbar.Title>

        <Toolbar.Actions>
          <Toolbar.Button>
            <Plus color={theme.iconSecondary} />
            <Text size={16} $weight="600" className="textButton">
              Criar produto
            </Text>
          </Toolbar.Button>
        </Toolbar.Actions>
      </Toolbar.Root>

      <SeparatorWithName name="Produtos" />
    </CategoryPageRoot>
  )
}
