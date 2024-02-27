'use client'

import { Text } from '../text/Text'
import { SeparatorWithNameStyle } from './SeparatorWithName.style'

export function SeparatorWithName({ name }: { name: string }) {
  return (
    <SeparatorWithNameStyle>
      <span className="line" />
      <Text size={18} $weight="700" className="text">
        {name}
      </Text>
      <span className="line" />
    </SeparatorWithNameStyle>
  )
}
