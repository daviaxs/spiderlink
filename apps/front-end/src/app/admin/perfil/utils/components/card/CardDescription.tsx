'use client'

import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'
import { useTheme } from 'styled-components'

export function CardDescription({ children }: { children: ReactNode }) {
  const theme = useTheme()

  return (
    <Text
      size={12}
      $weight="400"
      $letterSpacing="0.8px"
      color={theme.description}
    >
      {children}
    </Text>
  )
}
