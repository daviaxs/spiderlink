import { Text } from '@/shared/components/text/Text'
import { Root } from '../../defaultStyle'
import { CheckoutStepsProps } from '../../../CheckoutMenu'
import { PriceInput } from '@/app/(app)/admin/perfil/utils/components/forms/components/PriceInput'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { FormEvent, useState } from 'react'
import { themeColors } from '@/shared/style/theme/pallete'
import { setLocalStorageItem } from '@/shared/functions/localStorage'

export function Change({ onNext }: CheckoutStepsProps) {
  const [erroMessage, setErroMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const troco = formData.get('troco') as string

    if (!troco) {
      setErroMessage('Digite um valor para o troco')
      return
    }

    setLocalStorageItem({ key: 'step3-change', value: troco })

    onNext(5)
  }

  return (
    <Root>
      <Text as="h3" size={24} $weight="600" $textalign="center">
        Troco para quanto?
      </Text>

      <form
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '2rem',
        }}
        onSubmit={handleSubmit}
      >
        <PriceInput name="troco" placeholder="Troco" />

        {erroMessage && (
          <Text size={14} color={themeColors['red-400']}>
            {erroMessage}
          </Text>
        )}

        <ButtonForm size="full" type="submit">
          Continuar
        </ButtonForm>
      </form>
    </Root>
  )
}
