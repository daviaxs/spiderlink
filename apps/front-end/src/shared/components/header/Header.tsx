import { HeaderStyle } from './Header.style'
import { Text } from '../text/Text'
import { Menu } from '../menu/Menu'

export function Header({ toggleTheme }: { toggleTheme?: () => void }) {
  return (
    <HeaderStyle>
      <div className="header-info">
        <Menu toggleTheme={toggleTheme} />

        <Text as="h2" size={30} fontVariant="all-small-caps" $weight="900">
          spiderlink
        </Text>
      </div>
    </HeaderStyle>
  )
}
