import { useContext } from 'react'
import { AddressInfosRoot } from './AddressInfos.style'
import { Field } from './components/field/Field'
import { Text } from '@/shared/components/text/Text'
import { themeColors } from '@/shared/style/theme/pallete'
import { DeliveryDetailsContext } from '@/shared/contexts/DeliveryDetails'

export function AddressInfos() {
  const { userDeliveryDetails } = useContext(DeliveryDetailsContext)

  const userAddress = userDeliveryDetails?.endereco || {
    rua: null,
    numero: null,
    bairro: null,
    cidade: null,
    complemento: null,
  }

  const fields = [
    { title: 'Rua:', description: userAddress.rua },
    { title: 'Bairro:', description: userAddress.bairro },
    { title: 'Cidade:', description: userAddress.cidade },
    { title: 'Número:', description: userAddress.numero },
    { title: 'Complemento:', description: userAddress.complemento },
  ]

  return (
    <AddressInfosRoot>
      {fields.map((field, index) => (
        <Field.Root key={index}>
          <Field.Title>{field.title}</Field.Title>

          {field.description ? (
            <Field.Description>{field.description}</Field.Description>
          ) : (
            <Text
              as="span"
              size={16}
              color={themeColors['red-400']}
              $weight="600"
            >
              Não informado
            </Text>
          )}
        </Field.Root>
      ))}
    </AddressInfosRoot>
  )
}
