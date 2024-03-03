import { createContext, useState } from 'react'

interface DeliveryDetailsProps {
  openUpdateAddressDialog: () => void
  closeUpdateAddressDialog: () => void
  isUpdateAddressDialogOpen: boolean

  openDeliveryDetailsDialog: () => void
  closeDeliveryDetailsDialog: () => void
  isDeliveryDetailsDialogOpen: boolean
}

export const DeliveryDetailsContext = createContext({} as DeliveryDetailsProps)

export function DeliveryDetailsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isUpdateAddressDialogOpen, setIsUpdateAddressDialogOpen] =
    useState(false)

  const openUpdateAddressDialog = () => setIsUpdateAddressDialogOpen(true)
  const closeUpdateAddressDialog = () => setIsUpdateAddressDialogOpen(false)

  const [isDeliveryDetailsDialogOpen, setIsDeliveryDetailsDialogOpen] =
    useState(false)

  const openDeliveryDetailsDialog = () => setIsDeliveryDetailsDialogOpen(true)
  const closeDeliveryDetailsDialog = () => setIsDeliveryDetailsDialogOpen(false)

  return (
    <DeliveryDetailsContext.Provider
      value={{
        openUpdateAddressDialog,
        closeUpdateAddressDialog,
        isUpdateAddressDialogOpen,

        openDeliveryDetailsDialog,
        closeDeliveryDetailsDialog,
        isDeliveryDetailsDialogOpen,
      }}
    >
      {children}
    </DeliveryDetailsContext.Provider>
  )
}
