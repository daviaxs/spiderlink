import { createContext, useState } from 'react'

interface ProductAddToCartContextContextProps {
  openAddProductDialog: () => void
  closeAddProductDialog: () => void
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

  const openAddProductDialog = () => setIsOpen(true)
  const closeAddProductDialog = () => setIsOpen(false)

  return (
    <ProductAddToCartContextContext.Provider
      value={{
        openAddProductDialog,
        closeAddProductDialog,
        isOpen,
      }}
    >
      {children}
    </ProductAddToCartContextContext.Provider>
  )
}
