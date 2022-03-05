import React from "react"

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  /**
   * Receive the item it should be added
   * @method
   */
  addItem: (item) => {},
  /**
   * Receive the item already existing in the cart which should be removed
   * @method
   */
  removeItem: (id) => {},
})

export default CartContext
