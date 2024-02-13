'use client'

import { useTheme } from 'styled-components'
import { Text } from '../text/Text'
import { ReactNode } from 'react'

export function DescriptionBadge({ children }: { children: ReactNode }) {
  const theme = useTheme()

  return (
    <Text
      size={16}
      color={theme.description}
      $weight="500"
      $whiteSpace="nowrap"
    >
      {children}
    </Text>
  )
}
