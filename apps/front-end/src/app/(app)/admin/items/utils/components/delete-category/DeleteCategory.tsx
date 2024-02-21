import * as Dialog from '@radix-ui/react-dialog'
import { Trash2, X } from 'lucide-react'
import {
  Close,
  Content,
  Overlay,
  Trigger,
} from '@/shared/components/DialogBase.style'
import { useTheme } from 'styled-components'
import { Text } from '@/shared/components/text/Text'
import { CategoryItem } from '../category-item'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { useContext } from 'react'
import { CategoriesContext } from '@/shared/contexts/Categories'

interface DeleteCategoryProps {
  id: string
  name: string
}

export function DeleteCategory({ id, name }: DeleteCategoryProps) {
  const theme = useTheme()
  const { deleteCategory } = useContext(CategoriesContext)

  return (
    <Dialog.Root>
      <Trigger>
        <CategoryItem.Button as="div">
          <Trash2 />
        </CategoryItem.Button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            {name}
          </Text>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>

          <Text size={16} color={theme.description}>
            Ao deletar a categoria, todos os itens relacionados a ela serão
            deletados.
          </Text>

          <ButtonForm size="full" onClick={() => deleteCategory(id)}>
            Deletar
          </ButtonForm>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
