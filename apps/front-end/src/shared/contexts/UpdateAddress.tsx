import { createContext, useState } from 'react'

interface UpdateAddressProps {
  openUpdateAddressDialog: () => void
  closeUpdateAddressDialog: () => void
  isOpen: boolean
}

export const UpdateAddressContext = createContext({} as UpdateAddressProps)

export function UpdateAddressProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const openUpdateAddressDialog = () => setIsOpen(true)
  const closeUpdateAddressDialog = () => setIsOpen(false)

  return (
    <UpdateAddressContext.Provider
      value={{
        openUpdateAddressDialog,
        closeUpdateAddressDialog,
        isOpen,
      }}
    >
      {children}
    </UpdateAddressContext.Provider>
  )
}
