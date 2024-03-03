import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, Trigger } from '../DialogBase.style'
import { Settings2, X } from 'lucide-react'
import { InfoBadge } from '../info-badge'
import { UserDetailsForm } from './utils/components/user-details-form/UserDetailsForm'
import { UserDetails } from './DeliveryDetailsForm.style'
import { Text } from '../text/Text'
import { DeliveryDetailsContext } from '@/shared/contexts/DeliveryDetails'
import { useContext } from 'react'

export function DeliveryDetailsForm() {
  const {
    isDeliveryDetailsDialogOpen,
    openDeliveryDetailsDialog,
    closeDeliveryDetailsDialog,
  } = useContext(DeliveryDetailsContext)

  return (
    <Dialog.Root open={isDeliveryDetailsDialogOpen}>
      <Trigger
        style={{
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={openDeliveryDetailsDialog}
      >
        <InfoBadge.ButtonBadge>
          <Settings2 />
        </InfoBadge.ButtonBadge>
      </Trigger>

      <Dialog.Portal>
        <Overlay onClick={closeDeliveryDetailsDialog} />

        <Content>
          <UserDetails>
            <Text as="h2" size={28} $weight="600" $textalign="center">
              Dados para entrega
            </Text>

            <UserDetailsForm />
          </UserDetails>

          <Close onClick={closeDeliveryDetailsDialog}>
            <X size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
