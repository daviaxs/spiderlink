'use client'

import { MenuIcon } from '@/shared/assets/svgs'
import * as Dialog from '@radix-ui/react-dialog'
import {
  Close,
  Content,
  MenuContent,
  MenuHeader,
  Overlay,
  Trigger,
} from './Menu.style'
import { Text } from '@/shared/components/text/Text'
import { Home, LogOut, Palette, SlidersHorizontal, X } from 'lucide-react'
import { ButtonMenu } from '../buttons/button-menu'
import { useTheme } from 'styled-components'
import { SignInMenu } from '../sign-in-menu/SignInMenu'
import { parseCookies } from 'nookies'
import { SPIDER_LINK_ACCESS_TOKEN } from '@/shared/constants/cookiesNames'
import Link from 'next/link'
import { useState } from 'react'
import { handleLogout } from '@/shared/functions/handleLogout'

export function Menu({ toggleTheme }: { toggleTheme?: () => void }) {
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const cookies = parseCookies()
  const token = cookies[SPIDER_LINK_ACCESS_TOKEN]

  function closeMenu() {
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Trigger name="menu">
        <MenuIcon color={theme.icon} />
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <MenuHeader>
            <Close>
              <X size={30} color={theme.icon} />
            </Close>

            <Text as="h2" size={24} fontVariant="all-small-caps" $weight="900">
              Configurações
            </Text>
          </MenuHeader>

          <MenuContent>
            <ButtonMenu.Root onClick={toggleTheme}>
              <ButtonMenu.ButtonIcon>
                <Palette size={25} color={theme.icon} />
              </ButtonMenu.ButtonIcon>

              <ButtonMenu.ButtonTexts>
                <ButtonMenu.ButtonTitle>Tema</ButtonMenu.ButtonTitle>
                <ButtonMenu.ButtonSubTitle>
                  {theme.current}
                </ButtonMenu.ButtonSubTitle>
              </ButtonMenu.ButtonTexts>
            </ButtonMenu.Root>

            {window.location.pathname !== '/' && (
              <Link href="/" style={{ width: '100%' }} onClick={closeMenu}>
                <ButtonMenu.Root>
                  <ButtonMenu.ButtonIcon>
                    <Home size={25} color={theme.icon} />
                  </ButtonMenu.ButtonIcon>

                  <ButtonMenu.ButtonTexts>
                    <ButtonMenu.ButtonTitle>
                      Página inicial
                    </ButtonMenu.ButtonTitle>
                  </ButtonMenu.ButtonTexts>
                </ButtonMenu.Root>
              </Link>
            )}

            {!token ? (
              <SignInMenu />
            ) : (
              <>
                {!window.location.pathname.startsWith('/admin') && (
                  <Link
                    href="/admin"
                    style={{ width: '100%' }}
                    onClick={closeMenu}
                  >
                    <ButtonMenu.Root>
                      <ButtonMenu.ButtonIcon>
                        <SlidersHorizontal size={25} color={theme.icon} />
                      </ButtonMenu.ButtonIcon>

                      <ButtonMenu.ButtonTexts>
                        <ButtonMenu.ButtonTitle>Painel</ButtonMenu.ButtonTitle>
                      </ButtonMenu.ButtonTexts>
                    </ButtonMenu.Root>
                  </Link>
                )}

                <ButtonMenu.Root onClick={handleLogout}>
                  <ButtonMenu.ButtonIcon>
                    <LogOut size={25} color={theme.icon} />
                  </ButtonMenu.ButtonIcon>

                  <ButtonMenu.ButtonTexts>
                    <ButtonMenu.ButtonTitle>Sair</ButtonMenu.ButtonTitle>
                  </ButtonMenu.ButtonTexts>
                </ButtonMenu.Root>
              </>
            )}
          </MenuContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
