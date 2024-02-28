import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

interface DescriptionQuantityProps {
  children: ReactNode
}

export function OptionDescription({ children }: DescriptionQuantityProps) {
  return (
    <Text size={14} $weight="500" className="option-description">
      {children}
    </Text>
  )
}
