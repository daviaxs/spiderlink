export interface OptionProps {
  quantity: number
  id: string
  name: string
  description: string
  price: number
}

export interface SubsectionProps {
  id: string
  name: string
  limit: number
  required: boolean
  multipleChoice: boolean
  Options?: OptionProps[]
}

export interface ProductProps {
  id: string
  name: string
  price: number | string
  img: string
  description: string
  totalProductPrice: number
  Subsection?: SubsectionProps[]
}

export interface CartState {
  products: ProductProps[]
  productQuantity: { [key: string]: number }
  optionQuantity: { [key: string]: number }
}

export interface CartActions {
  addProduct: (product: ProductProps, subsections: SubsectionProps[]) => void
  removeProduct: (productId: string) => void
  addProductQuantity: (productId: string) => void
  removeProductQuantity: (productId: string) => void
  addOptionQuantity: (productId: string, optionId: string) => void
  removeOptionQuantity: (productId: string, optionId: string) => void
  removeOption: (productId: string, optionId: string) => void
  clearCart: () => void
}
