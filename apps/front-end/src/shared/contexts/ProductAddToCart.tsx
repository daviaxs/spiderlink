import { createContext, useState } from 'react'

interface ProductAddToCartProps {
  openAddProductDialog: () => void
  closeAddProductDialog: () => void
  isOpen: boolean
}

export const ProductAddToCartContext = createContext(
  {} as ProductAddToCartProps,
)

export function ProductAddToCartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const openAddProductDialog = () => setIsOpen(true)
  const closeAddProductDialog = () => setIsOpen(false)

  return (
    <ProductAddToCartContext.Provider
      value={{
        openAddProductDialog,
        closeAddProductDialog,
        isOpen,
      }}
    >
      {children}
    </ProductAddToCartContext.Provider>
  )
}
