import { inter } from '@/shared/style/theme/fonts'
import { Text } from '../text/Text'

export function SchedulesTitle() {
  return (
    <Text as="h2" size={20} className={inter.className}>
      Horários
    </Text>
  )
}
