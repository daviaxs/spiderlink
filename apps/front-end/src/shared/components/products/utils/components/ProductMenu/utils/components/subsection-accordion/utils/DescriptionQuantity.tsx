import { Text } from '@/shared/components/text/Text'
import { Option } from '@/shared/contexts/Options'

interface DescriptionQuantityProps {
  subsection: {
    Options: Option[]
  }
}

export function DescriptionQuantity({ subsection }: DescriptionQuantityProps) {
  return (
    <Text size={14} $weight="500" className="description-quantity">
      {subsection.Options.length > 1
        ? `Selecione até ${subsection.Options.length} opções`
        : `Selecione ${subsection.Options.length} opção`}
    </Text>
  )
}
