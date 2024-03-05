import { Text } from '@/shared/components/text/Text'
import { Root } from '../defaultStyle'
import { useTheme } from 'styled-components'

export function FinishCheckout() {
  const theme = useTheme()

  return (
    <Root>
      <Text as="h1" size={32} $weight="800" $textalign="center">
        Quase lá! 🎉
      </Text>

      <Text
        size={18}
        $weight="600"
        $textalign="center"
        color={theme.description}
      >
        Para finalizar seu pedido, clique no botão abaixo. <br /> Você será
        redirecionado para o Whatsapp.
      </Text>
    </Root>
  )
}
