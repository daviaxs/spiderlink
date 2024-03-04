import { createContext, useEffect, useState } from 'react'
import { DeliveryDetailsForm } from '../hooks/useDeliveryDetailsForm'
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../functions/localStorage'
import { SPIDER_LINK_USER_INFOS } from '../constants/names'

interface DeliveryDetailsProps {
  openUpdateAddressDialog: () => void
  closeUpdateAddressDialog: () => void
  isUpdateAddressDialogOpen: boolean

  openDeliveryDetailsDialog: () => void
  closeDeliveryDetailsDialog: () => void
  isDeliveryDetailsDialogOpen: boolean

  userDeliveryDetails: DeliveryDetailsForm | null
  setUserDeliveryDetails: (value: DeliveryDetailsForm | null) => void
  updateUserDeliveryDetails: (
    newUserDeliveryDetails: DeliveryDetailsForm,
  ) => void
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

  const [userDeliveryDetails, setUserDeliveryDetails] =
    useState<DeliveryDetailsForm | null>(null)

  useEffect(() => {
    const userInfos = getLocalStorageItem(
      SPIDER_LINK_USER_INFOS,
    ) as DeliveryDetailsForm | null
    setUserDeliveryDetails(userInfos)
  }, [])

  const updateUserDeliveryDetails = (
    newUserDeliveryDetails: DeliveryDetailsForm,
  ) => {
    setLocalStorageItem({
      key: SPIDER_LINK_USER_INFOS,
      value: newUserDeliveryDetails,
    })
    setUserDeliveryDetails(newUserDeliveryDetails)
  }

  return (
    <DeliveryDetailsContext.Provider
      value={{
        openUpdateAddressDialog,
        closeUpdateAddressDialog,
        isUpdateAddressDialogOpen,

        openDeliveryDetailsDialog,
        closeDeliveryDetailsDialog,
        isDeliveryDetailsDialogOpen,

        userDeliveryDetails,
        setUserDeliveryDetails,
        updateUserDeliveryDetails,
      }}
    >
      {children}
    </DeliveryDetailsContext.Provider>
  )
}
