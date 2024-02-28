import { Text } from '@/shared/components/text/Text'

interface DescriptionQuantityProps {
  limit: number
}

export function DescriptionQuantity({ limit }: DescriptionQuantityProps) {
  return (
    <Text size={14} $weight="500" className="description-quantity">
      {limit > 1 ? `Selecione até ${limit} opções` : `Selecione ${limit} opção`}
    </Text>
  )
}
