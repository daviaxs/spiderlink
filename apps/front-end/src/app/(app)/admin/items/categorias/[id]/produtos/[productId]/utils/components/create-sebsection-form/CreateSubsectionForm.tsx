'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'lucide-react'
import { Text } from '@/shared/components/text/Text'
import {
  Close,
  Content,
  Overlay,
  Trigger,
} from '@/shared/components/DialogBase.style'
import { useTheme } from 'styled-components'
import { Toolbar } from '@/shared/components/toolbar'

export function CreateSubsectionForm() {
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <Toolbar.Button>
          <Plus color={theme.iconSecondary} />
          <Text size={16} $weight="600" className="textButton">
            Criar subseção
          </Text>
        </Toolbar.Button>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Text size={32} $weight="600" $textalign="center">
            Criar subseção
          </Text>

          <Close>
            <X color={theme.icon} size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
