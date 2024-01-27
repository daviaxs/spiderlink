import { MenuIcon } from '@/shared/assets/svgs'
import { HeaderStyle } from './Header.style'
import { IconButton } from '../buttons/IconButton'
import { Text } from '../text/Text'

export function Header() {
  return (
    <HeaderStyle>
      <div className="header-info">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Text
          as="h2"
          size={30}
          color="dark-blue-800"
          fontVariant="all-small-caps"
          $weight="900"
        >
          spiderlink
        </Text>
      </div>
    </HeaderStyle>
  )
}
