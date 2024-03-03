import { AddressInfosRoot } from './AddressInfos.style'
import { Field } from './components/field/Field'

export function AddressInfos() {
  return (
    <AddressInfosRoot>
      <Field.Root>
        <Field.Title>Rua:</Field.Title>
        <Field.Description>Av. Paulista, 1000</Field.Description>
      </Field.Root>

      <Field.Root>
        <Field.Title>Bairro:</Field.Title>
        <Field.Description>Centro</Field.Description>
      </Field.Root>

      <Field.Root>
        <Field.Title>Cidade:</Field.Title>
        <Field.Description>São Paulo</Field.Description>
      </Field.Root>

      <Field.Root>
        <Field.Title>Número:</Field.Title>
        <Field.Description>99</Field.Description>
      </Field.Root>

      <Field.Root>
        <Field.Title>Complemento:</Field.Title>
        <Field.Description>Casa Verde</Field.Description>
      </Field.Root>
    </AddressInfosRoot>
  )
}
