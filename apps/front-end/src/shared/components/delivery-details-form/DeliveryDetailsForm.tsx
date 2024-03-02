import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, Trigger } from '../DialogBase.style'
import { Settings2, X } from 'lucide-react'
import { InfoBadge } from '../info-badge'

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
          <Close>
            <X size={32} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
