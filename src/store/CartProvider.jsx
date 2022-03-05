import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    const currentItemIndex = state.items.findIndex(item => item.id === action.item.id)
    let updatedItems
    if (currentItemIndex !== -1) {
      const currentItem = state.items[currentItemIndex]
      const updatedItem = {
        ...currentItem,
        amount: currentItem.amount + action.item.amount,
      }
      updatedItems = [...state.items]
      updatedItems[currentItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = item => {
    dispatchCartAction({ type: "ADD_ITEM", item: item })
  }
  const removeItemToCartHandler = id => {
    dispatchCartAction({ type: "REMOVE_ITEM", item: id })
  }

  const cartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }
  return <CartContext.Provider value={cartCtx}>{props.children}</CartContext.Provider>
}

export default CartProvider
