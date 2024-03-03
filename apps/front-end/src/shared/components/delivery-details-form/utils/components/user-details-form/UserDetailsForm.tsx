import { ButtonForm } from '@/shared/components/buttons/button-form/ButtonForm'
import { PhoneInput } from '../inputs/PhoneInput'
import { NameInput } from '../inputs/NameInput'
import { UserDetailsFormRoot } from './UserDetailsForm.style'
import { UserAddressCard } from '../user-address-card/UserAddressCard'

export function UserDetailsForm() {
  return (
    <UserDetailsFormRoot>
      <NameInput placeholder="Nome" name="nome" />
      <PhoneInput placeholder="Telefone com DDD" name="telefone" />

      <UserAddressCard />

      <ButtonForm size="full" type="button">
        Salvar
      </ButtonForm>
    </UserDetailsFormRoot>
  )
}
