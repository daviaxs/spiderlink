import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, Trigger } from './SignInMenu.style'
import { ButtonMenu } from '../buttons/button-menu'
import { Check, UserRound, X } from 'lucide-react'
import { useTheme } from 'styled-components'
import { Form } from '../form'
import { Text } from '../text/Text'
import { ButtonForm } from '../buttons/button-form/ButtonForm'
import { FormProvider } from 'react-hook-form'
import { useSignInForm } from '@/shared/hooks/useSignInForm'
import { SpanContainer } from '../spanContainer/SpanContainer.style'
import { ErrorMessage } from '../form/ErrorMenssage'
import { Loading } from '../loading/Loading'

export function SignInMenu() {
  const theme = useTheme()
  const { methods, signIn, loading, successMessage, errorMessage } =
    useSignInForm()

  return (
    <Dialog.Root>
      <Trigger>
        <ButtonMenu.Root as="div">
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

          <Close>
            <X color={theme.icon} size={32} />
          </Close>

          <FormProvider {...methods}>
            <Form.Content onSubmit={methods.handleSubmit(signIn)}>
              <SpanContainer>
                <Form.Input
                  type="email"
                  placeholder="Email"
                  autoComplete="current-email"
                  register={methods.register('email')}
                />
                <ErrorMessage name="email" />
              </SpanContainer>

              <SpanContainer>
                <Form.Input
                  type="password"
                  placeholder="Senha"
                  autoComplete="current-password"
                  register={methods.register('password')}
                />

                <ErrorMessage name="password" />
              </SpanContainer>

              {errorMessage && <Text size={16}>{errorMessage}</Text>}

              <ButtonForm
                type="submit"
                size="full"
                color={successMessage ? 'green' : 'blue'}
                disabled={
                  !methods.formState.isValid ||
                  methods.formState.isSubmitting ||
                  successMessage ||
                  loading
                }
              >
                {loading ? <Loading /> : successMessage ? <Check /> : 'Entrar'}
              </ButtonForm>
            </Form.Content>
          </FormProvider>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
