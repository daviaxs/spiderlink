import { FooterActions, FooterProductButton, FooterRoot } from './Footer.style'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { Text } from '@/shared/components/text/Text'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import { Minus, Plus } from 'lucide-react'
import { useTheme } from 'styled-components'

export function Footer() {
  const theme = useTheme()

  return (
    <FooterRoot>
      <FooterActions>
        <FooterProductButton>
          <Minus />
        </FooterProductButton>

        <span>0</span>

        <FooterProductButton>
          <Plus />
        </FooterProductButton>
      </FooterActions>

      <ButtonForm
        size="normal"
        type="button"
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '4px',
          width: '12rem',
        }}
      >
        <Text size={16} $weight="500" color={theme.white}>
          Adicionar
        </Text>

        <Text
          size={14}
          $weight="500"
          color={theme.white}
          style={{ marginTop: '2px' }}
        >
          {convertPriceToBRFormat(85445)}
        </Text>
      </ButtonForm>
    </FooterRoot>
  )
}
