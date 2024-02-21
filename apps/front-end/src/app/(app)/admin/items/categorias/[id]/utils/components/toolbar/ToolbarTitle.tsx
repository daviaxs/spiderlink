import { Text } from '@/shared/components/text/Text'

export function ToolbarTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text size={18} $weight="600">
      {children}
    </Text>
  )
}
