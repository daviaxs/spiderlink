import { HeaderStyle } from './Header.style'
import { Text } from '../text/Text'
import { Menu } from '../menu/Menu'
import { useShowHeader } from '@/shared/hooks/useShowHeader'
import { CartMenu } from '../cart-menu/CartMenu'

export function Header({ toggleTheme }: { toggleTheme?: () => void }) {
  const showHeader = useShowHeader()

  return (
    <HeaderStyle className={showHeader ? '' : 'hideHeader'}>
      <div className="header-info">
        <Menu toggleTheme={toggleTheme} />

        <Text as="h2" size={30} fontVariant="all-small-caps" $weight="900">
          spiderlink
        </Text>
      </div>

      <CartMenu />
    </HeaderStyle>
  )
}
