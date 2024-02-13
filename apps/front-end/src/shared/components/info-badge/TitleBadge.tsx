'use client'

import { ReactNode } from 'react'
import { Text } from '../text/Text'
import { useTheme } from 'styled-components'
import { inter } from '@/shared/style/theme/fonts'

export function TitleBadge({ children }: { children: ReactNode }) {
  const theme = useTheme()

  return (
    <Text as="h6" size={16} color={theme.title} className={inter.className}>
      {children}
    </Text>
  )
}
