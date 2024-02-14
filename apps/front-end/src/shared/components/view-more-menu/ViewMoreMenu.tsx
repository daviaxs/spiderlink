'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Text } from '@/shared/components/text/Text'
import { X } from 'lucide-react'
import { useTheme } from 'styled-components'
import { inter } from '@/shared/style/theme/fonts'
import { TabsComponent } from './utils/Tabs'
import {
  Close,
  Content,
  MenuContent,
  MenuHeader,
  Overlay,
  Trigger,
} from './ViewMoreMenu.style'

export function ViewMoreMenu() {
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <Text
          size={20}
          $weight="700"
          className={inter.className}
          $whiteSpace="nowrap"
        >
          Ver mais
        </Text>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <MenuHeader>
            <Close>
              <X size={30} color={theme.icon} />
            </Close>
          </MenuHeader>

          <MenuContent>
            <TabsComponent />
          </MenuContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
