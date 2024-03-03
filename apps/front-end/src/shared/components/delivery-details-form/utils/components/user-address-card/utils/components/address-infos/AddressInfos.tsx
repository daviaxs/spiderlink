import { useEffect, useState } from 'react'
import { AddressInfosRoot } from './AddressInfos.style'
import { Field } from './components/field/Field'
import { getLocalStorageItem } from '@/shared/functions/localStorage'
import { SPIDER_LINK_USER_INFOS } from '@/shared/constants/names'
import { DeliveryDetailsForm } from '@/shared/hooks/useDeliveryDetailsForm'
import { Text } from '@/shared/components/text/Text'
import { themeColors } from '@/shared/style/theme/pallete'

export function AddressInfos() {
  const [userAddressObject, setUserAddressObject] = useState(
    {} as DeliveryDetailsForm['endereco'],
  )

  useEffect(() => {
    const userInfos: DeliveryDetailsForm = getLocalStorageItem(
      SPIDER_LINK_USER_INFOS,
    )

    const userAddress = userInfos?.endereco

    if (userAddress) {
      setUserAddressObject(userAddress)
    }
  }, [])

  const fields = [
    { title: 'Rua:', description: userAddressObject.rua },
    { title: 'Bairro:', description: userAddressObject.bairro },
    { title: 'Cidade:', description: userAddressObject.cidade },
    { title: 'Número:', description: userAddressObject.numero },
    { title: 'Complemento:', description: userAddressObject.complemento },
  ]

  return (
    <AddressInfosRoot>
      {fields.map((field, index) => (
        <Field.Root key={index}>
          <Field.Title>{field.title}</Field.Title>

          {field.description && field.description.length > 0 ? (
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
