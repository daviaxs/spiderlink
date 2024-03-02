/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import React, { createContext, useReducer, ReactNode } from 'react'
import {
  CartActions,
  CartState,
  ProductProps,
  SubsectionProps,
} from './interfaces'
import { convertPriceToBRFormat } from '@/shared/functions/convertPriceToBRFormat'
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '@/shared/functions/localStorage'
import { ECOMMERCE_NAME } from '@/shared/constants/names'

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
          [action.payload]: (state.productQuantity[action.payload] || 1) + 1,
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

  function selectProductProperties(
    product: ProductProps,
    totalProductPrice: number,
    productQuantity?: number,
  ) {
    const { id, name, price, description, img, Subsection } = product
    return {
      id,
      name,
      price,
      description,
      Subsection,
      img,
      totalProductPrice,
      productQuantity,
    }
  }

  const addProduct = (
    product: ProductProps,
    subsections: SubsectionProps[],
  ) => {
    const productWithSelectedOptions = {
      ...product,
      id: `${product.id}-${Date.now()}`,
      Subsection: subsections.map((subsection) => ({
        ...subsection,
        Options: subsection.Options?.filter(
          (option) => state.optionQuantity[`${product.id}-${option.id}`] > 0,
        ).map((option) => ({
          ...option,
          quantity: state.optionQuantity[`${product.id}-${option.id}`],
        })),
      })),
    }

    let totalOptionPrice = 0
    productWithSelectedOptions.Subsection?.forEach((subsection) =>
      subsection.Options?.forEach((option) => {
        if (option.quantity > 0) {
          totalOptionPrice += option.price * option.quantity
        }
      }),
    )

    const totalProductPrice =
      (Number(product.price) + totalOptionPrice) *
      (state.productQuantity[product.id] || 1)

    const selectedProduct = selectProductProperties(
      productWithSelectedOptions,
      totalProductPrice,
      state.productQuantity[product.id] || 1,
    )

    const existingProducts =
      getLocalStorageItem(`${ECOMMERCE_NAME}-products-cart`) || []

    existingProducts.push(selectedProduct)

    setLocalStorageItem({
      key: `${ECOMMERCE_NAME}-products-cart`,
      value: existingProducts,
    })

    dispatch({
      type: ADD_PRODUCT,
      payload: {
        ...productWithSelectedOptions,
        price: totalProductPrice,
      },
    })
  }

  const removeProduct = (productId: string) => {
    const existingProducts =
      getLocalStorageItem(`${ECOMMERCE_NAME}-products-cart`) || []

    const updatedProducts = existingProducts.filter(
      (product: ProductProps) => product.id !== productId,
    )

    setLocalStorageItem({
      key: `${ECOMMERCE_NAME}-products-cart`,
      value: updatedProducts,
    })

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
