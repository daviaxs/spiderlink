import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, Trigger } from './SignInMenu.style'
import { ButtonMenu } from '../buttons/button-menu'
import { UserRound } from 'lucide-react'
import { useTheme } from 'styled-components'

export function SignInMenu() {
  const theme = useTheme()

  return (
    <Dialog.Root>
      <Trigger>
        <ButtonMenu.Root>
          <ButtonMenu.ButtonIcon>
            <UserRound size={25} color={theme.icon} />
          </ButtonMenu.ButtonIcon>

          <ButtonMenu.ButtonTexts>
            <ButtonMenu.ButtonTitle>Entrar como admin</ButtonMenu.ButtonTitle>
          </ButtonMenu.ButtonTexts>
        </ButtonMenu.Root>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>Hello word</Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
