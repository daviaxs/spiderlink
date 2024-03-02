import { InfosBadgesRoot } from './InfosBadges.style'
import { DeliveryTime } from './DeliveryTime'
import { Status } from './Status'
import { DeliveryDetails } from './DeliveryDetails'

export function InfosBadges() {
  return (
    <InfosBadgesRoot>
      <Status />

      <DeliveryDetails />

      <DeliveryTime />
    </InfosBadgesRoot>
  )
}
