import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content } from './UpdateAddress.style'
import { Check, X } from 'lucide-react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { DeliveryDetailsContext } from '@/shared/contexts/DeliveryDetails'
import { UserDetailsFormRoot } from '../../../../user-details-form/UserDetailsForm.style'
import { useUpdateUserAddressForm } from '@/shared/hooks/useUpdateUserAddressForm'
import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { Loading } from '@/shared/components/loading/Loading'
import { TextInput } from '../../../../inputs/TextInput'
import { Overlay } from '@/shared/components/DialogBase.style'
import { Text } from '@/shared/components/text/Text'

export function UpdateAddress() {
  const {
    isUpdateAddressDialogOpen,
    closeUpdateAddressDialog,
    userDeliveryDetails,
  } = useContext(DeliveryDetailsContext)
  const { errorMessage, loading, successMessage, updateUserAddressForm } =
    useUpdateUserAddressForm()

  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [complemento, setComplemento] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'rua':
        setRua(event.target.value)
        break
      case 'numero':
        setNumero(event.target.value)
        break
      case 'bairro':
        setBairro(event.target.value)
        break
      case 'cidade':
        setCidade(event.target.value)
        break
      case 'complemento':
        setComplemento(event.target.value)
        break
    }
  }

  useEffect(() => {
    const userAddress = userDeliveryDetails?.endereco

    if (userAddress) {
      setRua(userAddress.rua)
      setNumero(userAddress.numero)
      setBairro(userAddress.bairro)
      setCidade(userAddress.cidade)
      setComplemento(userAddress.complemento)
    }
  }, [userDeliveryDetails])

  const inputs = [
    { name: 'rua', value: rua, onChange: handleChange, placeholder: 'Rua' },
    {
      name: 'numero',
      value: numero,
      onChange: handleChange,
      placeholder: 'Número',
    },
    {
      name: 'bairro',
      value: bairro,
      onChange: handleChange,
      placeholder: 'Bairro',
    },
    {
      name: 'cidade',
      value: cidade,
      onChange: handleChange,
      placeholder: 'Cidade',
    },
    {
      name: 'complemento',
      value: complemento,
      onChange: handleChange,
      placeholder: 'Complemento',
    },
  ]

  return (
    <Dialog.Root open={isUpdateAddressDialogOpen}>
      <Dialog.Portal>
        <Overlay onClick={closeUpdateAddressDialog} />

        <Content>
          <Text as="h2" size={28} $weight="600" $textalign="center">
            Editar endereço
          </Text>

          <UserDetailsFormRoot onSubmit={updateUserAddressForm}>
            {inputs.map((input, index) => (
              <TextInput
                key={index}
                name={input.name}
                value={input.value}
                onChange={input.onChange}
                placeholder={input.placeholder}
              />
            ))}

            {errorMessage && <span>{errorMessage}</span>}

            <ButtonForm
              size="full"
              type="submit"
              disabled={loading || successMessage}
              color="primary"
            >
              {loading ? <Loading /> : successMessage ? <Check /> : 'Salvar'}
            </ButtonForm>
          </UserDetailsFormRoot>

          <Close onClick={closeUpdateAddressDialog}>
            <X size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
