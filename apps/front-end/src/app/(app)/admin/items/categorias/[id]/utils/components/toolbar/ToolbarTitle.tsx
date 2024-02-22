import { Text } from '@/shared/components/text/Text'

export function ToolbarTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text size={24} $weight="600">
      {children}
    </Text>
  )
}
