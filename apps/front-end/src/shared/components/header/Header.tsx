import { HeaderStyle } from './Header.style'
import { Text } from '../text/Text'
import { Menu } from '../menu/Menu'

export function Header() {
  return (
    <HeaderStyle>
      <div className="header-info">
        <Menu />

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
