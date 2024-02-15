'use client'

import { MenuIcon } from '@/shared/assets/svgs'
import * as Dialog from '@radix-ui/react-dialog'
import {
  Close,
  Content,
  MenuContent,
  MenuHeader,
  Overlay,
  Trigger,
} from './Menu.style'
import { Text } from '@/shared/components/text/Text'
import { Palette, X } from 'lucide-react'
import { ButtonMenu } from '../buttons/button-menu'
import { useTheme } from 'styled-components'
import { SignInMenu } from '../sign-in-menu/SignInMenu'

export function Menu({ toggleTheme }: { toggleTheme?: () => void }) {
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <MenuIcon color={theme.icon} />
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <MenuHeader>
            <Close>
              <X size={30} color={theme.icon} />
            </Close>

            <Text as="h2" size={24} fontVariant="all-small-caps" $weight="900">
              Configurações
            </Text>
          </MenuHeader>

          <MenuContent>
            <ButtonMenu.Root toggleTheme={toggleTheme}>
              <ButtonMenu.ButtonIcon>
                <Palette size={25} color={theme.icon} />
              </ButtonMenu.ButtonIcon>

              <ButtonMenu.ButtonTexts>
                <ButtonMenu.ButtonTitle>Tema</ButtonMenu.ButtonTitle>
                <ButtonMenu.ButtonSubTitle>
                  {theme.current}
                </ButtonMenu.ButtonSubTitle>
              </ButtonMenu.ButtonTexts>
            </ButtonMenu.Root>

            <SignInMenu />
          </MenuContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
