import { Text } from '@/shared/components/text/Text'
import { Actions, Button, Root } from '../defaultStyle'
import { CheckoutStepsProps } from '../../CheckoutMenu'
import { useContext } from 'react'
import { DeliveryDetailsContext } from '@/shared/contexts/DeliveryDetails'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { BookCheck } from 'lucide-react'
import { useTheme } from 'styled-components'
import { getLocalStorageItem } from '@/shared/functions/localStorage'
import { SPIDER_LINK_USER_INFOS } from '@/shared/constants/names'

export function VerifyUserData({ onNext }: CheckoutStepsProps) {
  const { openDeliveryDetailsDialog } = useContext(DeliveryDetailsContext)
  const theme = useTheme()

  const userInfos = getLocalStorageItem(SPIDER_LINK_USER_INFOS)
  const { nome, telefone, endereco } = userInfos || {}

  function nextStep() {
    if (
      !userInfos ||
      !nome ||
      !telefone ||
      !endereco ||
      Object.values(endereco || {}).some((value) => !value)
    ) {
      openDeliveryDetailsDialog()
      return
    }

    onNext(5)
  }

  return (
    <Root>
      <Text
        as="h3"
        size={24}
        $weight="600"
        $textalign="center"
        style={{
          marginTop: '1rem',
        }}
      >
        Verificar dados para entrega
      </Text>

      <Actions
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <Button onClick={openDeliveryDetailsDialog}>
          <div className="delivery-option">
            <BookCheck color={theme.iconSecondary} />
            <Text size={16} $weight="600">
              Verificar
            </Text>
          </div>
        </Button>

        <ButtonForm size="full" onClick={nextStep}>
          Continuar
        </ButtonForm>
      </Actions>
    </Root>
  )
}
