import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { PhoneInput } from '../inputs/PhoneInput'
import { NameInput } from '../inputs/NameInput'
import { UserDetailsFormRoot } from './UserDetailsForm.style'
import { UserAddressCard } from '../user-address-card/UserAddressCard'
import { useDeliveryDetailsForm } from '@/shared/hooks/useDeliveryDetailsForm'
import { Check } from 'lucide-react'
import { Loading } from '@/shared/components/loading/Loading'

export function UserDetailsForm() {
  const { deliveryDetailsForm, errorMessage, loading, successMessage } =
    useDeliveryDetailsForm()

  return (
    <UserDetailsFormRoot onSubmit={deliveryDetailsForm}>
      <NameInput placeholder="Nome" name="nome" />
      <PhoneInput placeholder="Telefone com DDD" name="telefone" />

      <UserAddressCard />

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
  )
}
