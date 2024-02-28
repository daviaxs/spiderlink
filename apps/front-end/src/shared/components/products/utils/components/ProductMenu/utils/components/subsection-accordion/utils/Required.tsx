import { Text } from '@/shared/components/text/Text'

export function Required() {
  return (
    <Text
      size={14}
      $weight="500"
      className="required"
      fontVariant="all-small-caps"
    >
      Obrigatório
    </Text>
  )
}
