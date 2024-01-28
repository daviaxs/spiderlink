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
import { Palette, UserRound, X } from 'lucide-react'
import { ButtonMenu } from '../header/utils/button'

export function Menu({ toggleTheme }: { toggleTheme?: () => void }) {
  return (
    <Dialog.Root>
      <Trigger>
        <MenuIcon />
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <MenuHeader>
            <Close>
              <X size={30} />
            </Close>

            <Text size={24} fontVariant="all-small-caps" $weight="900">
              Configurações
            </Text>
          </MenuHeader>

          <MenuContent>
            <ButtonMenu.Root toggleTheme={toggleTheme}>
              <ButtonMenu.ButtonIcon>
                <Palette size={25} />
              </ButtonMenu.ButtonIcon>

              <ButtonMenu.ButtonTexts>
                <ButtonMenu.ButtonTitle>Tema</ButtonMenu.ButtonTitle>
                <ButtonMenu.ButtonSubTitle>claro</ButtonMenu.ButtonSubTitle>
              </ButtonMenu.ButtonTexts>
            </ButtonMenu.Root>

            <ButtonMenu.Root>
              <ButtonMenu.ButtonIcon>
                <UserRound size={25} />
              </ButtonMenu.ButtonIcon>

              <ButtonMenu.ButtonTexts>
                <ButtonMenu.ButtonTitle>
                  Entrar como admin
                </ButtonMenu.ButtonTitle>
              </ButtonMenu.ButtonTexts>
            </ButtonMenu.Root>
          </MenuContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
