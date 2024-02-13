import { InfosBadgesRoot } from './InfosBadges.style'
import { DeliveryTime } from './DeliveryTime'
import { Status } from './Status'
import { Address } from './Address'

export function InfosBadges() {
  return (
    <InfosBadgesRoot>
      <DeliveryTime />

      <Status />

      <Address />
    </InfosBadgesRoot>
  )
}
