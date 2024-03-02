import { Text } from '@/shared/components/text/Text'
import { AlertStyle } from './Alert.style'
import { ReactNode } from 'react'

interface AlertProps {
  children: ReactNode
}

export function Alert({ children }: AlertProps) {
  return (
    <AlertStyle>
      <Text size={12} $weight="600" color="white">
        {children}
      </Text>
    </AlertStyle>
  )
}
