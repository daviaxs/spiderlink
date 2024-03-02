import { HeaderStyle } from './Header.style'
import { Text } from '../text/Text'
import { Menu } from '../menu/Menu'
import { useShowHeader } from '@/shared/hooks/useShowHeader'
import { CartMenu } from '../cart-menu/CartMenu'
import Link from 'next/link'
import { useContext } from 'react'
import { DomainInfosContext } from '@/shared/contexts/DomainInfos'

export function Header({ toggleTheme }: { toggleTheme?: () => void }) {
  const showHeader = useShowHeader()
  const { name } = useContext(DomainInfosContext)

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
            {name}
          </Text>
        </Link>
      </div>

      <CartMenu />
    </HeaderStyle>
  )
}
