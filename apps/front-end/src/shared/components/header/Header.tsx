import { HeaderStyle } from './Header.style'
import { Text } from '../text/Text'
import { Menu } from '../menu/Menu'
import { useShowHeader } from '@/shared/hooks/useShowHeader'
import { CartMenu } from '../cart-menu/CartMenu'
import { ECOMMERCE_NAME } from '@/shared/constants/names'
import Link from 'next/link'

export function Header({ toggleTheme }: { toggleTheme?: () => void }) {
  const showHeader = useShowHeader()

  return (
    <HeaderStyle className={showHeader ? '' : 'hideHeader'}>
      <div className="header-info">
        <Menu toggleTheme={toggleTheme} />

        <Link
          href={'/'}
          style={{
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text as="h2" size={30} fontVariant="all-small-caps" $weight="900">
            {ECOMMERCE_NAME}
          </Text>
        </Link>
      </div>

      <CartMenu />
    </HeaderStyle>
  )
}
