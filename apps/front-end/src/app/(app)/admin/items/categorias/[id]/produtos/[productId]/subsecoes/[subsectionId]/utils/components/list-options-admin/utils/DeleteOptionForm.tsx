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
import { OptionsContext } from '@/shared/contexts/Options'

interface DeleteOptionFormProps {
  name: string
  optionId: string
}

export function DeleteOptionForm({ name, optionId }: DeleteOptionFormProps) {
  const theme = useTheme()
  const { deleteOption, loading } = useContext(OptionsContext)

  return (
    <Dialog.Root>
      <Trigger name="deletar-opção" style={{ padding: '0' }}>
        <button className="ActionButton">
          <Trash2 />
        </button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <SpanContainer $align="center">
            <Text size={32} $weight="600" $textalign="center">
              Apagar opção: {name}
            </Text>

            <Text size={16} $textalign="center" color={theme.description}>
              Tem certeza que deseja apagar a opção? Ao apagar, não será
              possível recuperar os dados.
            </Text>
          </SpanContainer>

          <ButtonForm
            size="full"
            color="primary"
            onClick={() => deleteOption(optionId)}
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
