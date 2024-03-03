import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, Trigger } from '../DialogBase.style'
import { Settings2, X } from 'lucide-react'
import { InfoBadge } from '../info-badge'
import { UserDetailsForm } from './utils/components/user-details-form/UserDetailsForm'
import { UserDetails } from './DeliveryDetailsForm.style'
import { Text } from '../text/Text'

export function DeliveryDetailsForm() {
  return (
    <Dialog.Root>
      <Trigger
        style={{
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <InfoBadge.ButtonBadge>
          <Settings2 />
        </InfoBadge.ButtonBadge>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <UserDetails>
            <Text as="h2" size={28} $weight="600" $textalign="center">
              Dados para entrega
            </Text>

            <UserDetailsForm />
          </UserDetails>

          <Close>
            <X size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
