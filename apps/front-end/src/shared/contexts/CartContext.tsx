/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import React, { createContext, useReducer, ReactNode } from 'react'

interface OptionProps {
  quantity: number
  id: string
  name: string
  description: string
  price: number
}

interface SubsectionProps {
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
  Subsection?: SubsectionProps[]
}

interface CartState {
  products: ProductProps[]
  productQuantity: { [key: string]: number }
  optionQuantity: { [key: string]: number }
}

interface CartActions {
  addProduct: (product: ProductProps) => void
  removeProduct: (productId: string) => void
  addProductQuantity: (productId: string) => void
  removeProductQuantity: (productId: string) => void
  addOptionQuantity: (productId: string, optionId: string) => void
  removeOptionQuantity: (productId: string, optionId: string) => void
  removeOption: (productId: string, optionId: string) => void
  clearCart: () => void
}

type CartContextData = CartState & CartActions

const initialState = {
  products: [],
  productQuantity: {},
  optionQuantity: {},
  subsectionLimit: {},
}

export const CartContext = createContext({} as CartContextData)

const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const ADD_PRODUCT_QUANTITY = 'ADD_PRODUCT_QUANTITY'
const REMOVE_PRODUCT_QUANTITY = 'REMOVE_PRODUCT_QUANTITY'
const ADD_OPTION_QUANTITY = 'ADD_OPTION_QUANTITY'
const REMOVE_OPTION_QUANTITY = 'REMOVE_OPTION_QUANTITY'
const REMOVE_OPTION = 'REMOVE_OPTION'
const CLEAR_CART = 'CLEAR_CART'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cartReducer(state: any, action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        productQuantity: { ...state.productQuantity, [action.payload.id]: 1 },
      }

    case REMOVE_PRODUCT:
      const { [action.payload]: _, ...restProductQuantity } =
        state.productQuantity
      const { [action.payload]: __, ...restOptionQuantity } =
        state.optionQuantity
      return {
        ...state,
        products: state.products.filter(
          (product: ProductProps) => product.id !== action.payload,
        ),
        productQuantity: restProductQuantity,
        optionQuantity: restOptionQuantity,
      }

    case ADD_PRODUCT_QUANTITY:
      return {
        ...state,
        productQuantity: {
          ...state.productQuantity,
          [action.payload]: (state.productQuantity[action.payload] || 0) + 1,
        },
      }

    case REMOVE_PRODUCT_QUANTITY:
      return {
        ...state,
        productQuantity: {
          ...state.productQuantity,
          [action.payload]: (state.productQuantity[action.payload] || 0) - 1,
        },
      }

    case ADD_OPTION_QUANTITY:
      const { productId, optionId } = action.payload

      console.log(state.optionQuantity[`${productId}-${optionId}`] || 0)
      return {
        ...state,
        optionQuantity: {
          ...state.optionQuantity,
          [`${productId}-${optionId}`]:
            (state.optionQuantity[`${productId}-${optionId}`] || 0) + 1,
        },
      }

    case REMOVE_OPTION_QUANTITY:
      return {
        ...state,
        optionQuantity: {
          ...state.optionQuantity,
          [`${action.payload.productId}-${action.payload.optionId}`]:
            (state.optionQuantity[
              `${action.payload.productId}-${action.payload.optionId}`
            ] || 0) - 1,
        },
      }

    case REMOVE_OPTION:
      const {
        [`${action.payload.productId}-${action.payload.optionId}`]: ___,
        ...rest
      } = state.optionQuantity
      return {
        ...state,
        optionQuantity: rest,
      }

    case CLEAR_CART:
      return initialState
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addProduct = (product: ProductProps) => {
    let totalOptionPrice = 0

    product.Subsection?.forEach((subsection) =>
      subsection.Options?.forEach((option) => {
        const quantity = state.optionQuantity[`${product.id}-${option.id}`] || 0
        if (quantity > 0) {
          totalOptionPrice += option.price * quantity
        }
      }),
    )

    const productPrice =
      typeof product.price === 'number'
        ? product.price
        : parseFloat(product.price)
    const totalProductPrice = productPrice + totalOptionPrice

    const productQuantity = state.productQuantity[product.id] || 0
    const finalPrice = totalProductPrice * productQuantity

    dispatch({ type: ADD_PRODUCT, payload: product })
  }

  const removeProduct = (productId: string) => {
    dispatch({ type: REMOVE_PRODUCT, payload: productId })
  }

  const addProductQuantity = (productId: string) => {
    dispatch({ type: ADD_PRODUCT_QUANTITY, payload: productId })
  }

  const removeProductQuantity = (productId: string) => {
    dispatch({ type: REMOVE_PRODUCT_QUANTITY, payload: productId })
  }

  const addOptionQuantity = (productId: string, optionId: string) => {
    dispatch({ type: ADD_OPTION_QUANTITY, payload: { productId, optionId } })
  }

  const removeOptionQuantity = (productId: string, optionId: string) => {
    dispatch({ type: REMOVE_OPTION_QUANTITY, payload: { productId, optionId } })
  }

  const removeOption = (productId: string, optionId: string) => {
    dispatch({ type: REMOVE_OPTION, payload: { productId, optionId } })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProduct,
        removeProduct,
        addProductQuantity,
        removeProductQuantity,
        addOptionQuantity,
        removeOptionQuantity,
        removeOption,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}