import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, Trigger } from './SignInMenu.style'
import { ButtonMenu } from '../buttons/button-menu'
import { UserRound } from 'lucide-react'
import { useTheme } from 'styled-components'
import { Form } from '../form'
import { Text } from '../text/Text'
import { ButtonForm } from '../buttons/button-form/ButtonForm'

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

        <Content>
          <Text size={32} $weight="600">
            Entrar
          </Text>

          <Form.Content>
            <Form.Input type="email" placeholder="Email" />
            <Form.Input type="password" placeholder="Senha" />

            <ButtonForm type="submit" size="full">
              Entrar
            </ButtonForm>
          </Form.Content>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
