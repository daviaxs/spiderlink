import { Text } from '@/shared/components/text/Text'
import { SubsectionItemBadgeStyle } from './SubsectionItem.style'

interface Subs1ectionItemBadgeProps {
  title?: string
  content: string
}

export function Subs1ectionItemBadge({
  content,
  title,
}: Subs1ectionItemBadgeProps) {
  return (
    <SubsectionItemBadgeStyle>
      {title && (
        <Text size={16} fontVariant="all-small-caps">
          {title}
        </Text>
      )}
      <Text size={16} fontVariant="all-small-caps">
        {content}
      </Text>
    </SubsectionItemBadgeStyle>
  )
}
