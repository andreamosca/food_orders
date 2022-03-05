import React from "react"

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  /**
   * Receive the item it should be added
   * @param {Object} item - The item to add
   * @param {string} item.id - The id of the item
   * @param {string} item.name - The name of the item
   * @param {string} item.description - The description of the item
   * @param {number} item.price - The price of the item
   * @param {number} item.amount - The amount of the item to buy 
   */
  addItem: (item) => {},
  /**
   * Receive the item already existing in the cart which should be removed
   * @param {string} id - The id of the item
   * @method
   */
  removeItem: (id) => {},
})

export default CartContext
