import { AdminContent, AdminRoot } from './Admin.style'
import { Text } from '@/shared/components/text/Text'
import { ButtonAdmin } from './utils/components/button'
import { PanelsLeftBottom, Settings } from 'lucide-react'
import Link from 'next/link'

export default function AdminPage() {
  return (
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
        <Link href="/admin/perfil">
          <ButtonAdmin.Root>
            <Settings size={75} className="icon" />

            <ButtonAdmin.Title>Editar perfil</ButtonAdmin.Title>
          </ButtonAdmin.Root>
        </Link>

        <ButtonAdmin.Root>
          <PanelsLeftBottom size={75} className="icon" />

          <ButtonAdmin.Title>Editar items</ButtonAdmin.Title>
        </ButtonAdmin.Root>
      </AdminContent>
    </AdminRoot>
  )
}
