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
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { useContext } from 'react'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { Loading } from '@/shared/components/loading/Loading'
import { SubsectionsContext } from '@/shared/contexts/Subsections'
import { SubsectionItem } from '../../subsection-item'

interface DeleteSubsectionFormProps {
  name: string
  subsectionId: string
}

export function DeleteSubsectionForm({
  name,
  subsectionId,
}: DeleteSubsectionFormProps) {
  const theme = useTheme()
  const { deleteSubsection, loading } = useContext(SubsectionsContext)

  return (
    <Dialog.Root>
      <Trigger>
        <SubsectionItem.Button as="div">
          <Trash2 />
        </SubsectionItem.Button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <SpanContainer $align="center">
            <Text size={32} $weight="600" $textalign="center">
              Apagar subseção: {name}
            </Text>

            <Text size={16} $textalign="center" color={theme.description}>
              Tem certeza que deseja apagar a subseção? Ao apagar, não será
              possível recuperar os dados.
            </Text>
          </SpanContainer>

          <ButtonForm
            size="full"
            color="primary"
            onClick={() => deleteSubsection(subsectionId)}
          >
            {loading ? <Loading /> : 'Apagar'}
          </ButtonForm>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
