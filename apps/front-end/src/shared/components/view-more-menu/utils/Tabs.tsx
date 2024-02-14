import { Text } from '../../text/Text'
import { inter } from '@/shared/style/theme/fonts'
import { Content, InfosWrapper, List, Root, Trigger } from './Tabs.style'
import { useTheme } from 'styled-components'
import { useGetDomainInfos } from '@/shared/hooks/useGetDomainInfos'
import { convertToCep } from '@/shared/functions/convertToCep'
import { convertToCnpj } from '@/shared/functions/convertToCnpj'

export function TabsComponent() {
  const theme = useTheme()
  const { address, cep, cnpj } = useGetDomainInfos()

  return (
    <Root defaultValue="about">
      <List>
        <Trigger className="TabsTrigger" value="about">
          <Text as="h2" size={24} $weight="600" className={inter.className}>
            Sobre
          </Text>
        </Trigger>

        <Trigger className="TabsTrigger" value="schedule">
          <Text as="h2" size={24} $weight="600" className={inter.className}>
            Horários
          </Text>
        </Trigger>
      </List>

      <Content className="TabsContent" value="about">
        <InfosWrapper>
          <Text
            as="h3"
            size={24}
            $weight="600"
            className={inter.className}
            color={theme.title}
          >
            Endereço
          </Text>

          <div>
            <Text
              size={20}
              $weight="600"
              className={inter.className}
              color={theme.description}
            >
              RUA: {address}
            </Text>

            <Text
              size={20}
              $weight="600"
              className={inter.className}
              color={theme.description}
            >
              CEP: {convertToCep(cep)}
            </Text>
          </div>
        </InfosWrapper>

        <InfosWrapper>
          <Text
            as="h3"
            size={24}
            $weight="600"
            className={inter.className}
            color={theme.title}
          >
            Outras informações
          </Text>

          <div>
            <Text
              size={20}
              $weight="600"
              className={inter.className}
              color={theme.description}
            >
              CPNJ: {convertToCnpj(cnpj)}
            </Text>
          </div>
        </InfosWrapper>
      </Content>

      <Content className="TabsContent" value="schedule">
        <Text size={20} $weight="700" className={inter.className}>
          Horários
        </Text>
      </Content>
    </Root>
  )
}
