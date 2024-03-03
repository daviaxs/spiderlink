import { createContext, useState } from 'react'

interface ProductAddToCartContextContextProps {
  openDialog: () => void
  closeDialog: () => void
  isOpen: boolean
}

export const ProductAddToCartContextContext = createContext(
  {} as ProductAddToCartContextContextProps,
)

export function ProductAddToCartContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => setIsOpen(true)
  const closeDialog = () => setIsOpen(false)

  return (
    <ProductAddToCartContextContext.Provider
      value={{ openDialog, closeDialog, isOpen }}
    >
      {children}
    </ProductAddToCartContextContext.Provider>
  )
}
