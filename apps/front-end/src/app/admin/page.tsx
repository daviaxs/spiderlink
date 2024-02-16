'use client'

import { useVerifyToken } from '@/shared/hooks/useVerifyToken'
import { LoadingPage } from './utils/loadingPage/LoadingPage'
import { AdminContent, AdminRoot } from './Admin.style'
import { Text } from '@/shared/components/text/Text'
import { ButtonAdmin } from './utils/components/button'
import { PanelsLeftBottom, Settings } from 'lucide-react'
import { useTheme } from 'styled-components'

export default function AdminPage() {
  const { success } = useVerifyToken()
  const theme = useTheme()

  return success ? (
    <AdminRoot>
      <Text
        size={28}
        fontVariant="all-small-caps"
        $weight="800"
        $letterSpacing="0.8px"
      >
        Admin Painel
      </Text>

      <AdminContent>
        <ButtonAdmin.Root>
          <Settings size={75} color={theme.icon} />

          <ButtonAdmin.Title>Editar perfil</ButtonAdmin.Title>
        </ButtonAdmin.Root>

        <ButtonAdmin.Root>
          <PanelsLeftBottom size={75} color={theme.icon} />

          <ButtonAdmin.Title>Editar items</ButtonAdmin.Title>
        </ButtonAdmin.Root>
      </AdminContent>
    </AdminRoot>
  ) : (
    <LoadingPage />
  )
}
