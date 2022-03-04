import { Fragment, useState } from "react"
import Modal from "../UI/Modal"
import CartIcon from "./CartIcon"

import cartClasses from "./Cart.module.css"
import buttonClasses from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
  return (
    <button className={buttonClasses.button} onClick={props.onClick}>
      <span className={buttonClasses.icon}>
        <CartIcon />
      </span>
      <span>Il tuo carrello</span>
      <span className={buttonClasses.badge}>3</span>
    </button>
  )
}

const CartModal = props => {
  const cartItems = (
    <ul className={cartClasses["cart-items"]}>
      {props.items.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={cartClasses.total}>
        <span>Total Amount</span>
        <span>€22.99</span>
      </div>
      <div className={cartClasses.actions}>
        <button className={cartClasses["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={cartClasses.button}>Order</button>
      </div>
    </Modal>
  )
}

const Cart = props => {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && (
        <CartModal
          onClose={hideCartHandler}
          items={[
            {
              id: "m1",
              name: "Sushi",
              description: "Finest fish and veggies",
              price: 22.99,
            },
          ]}
        />
      )}
      <HeaderCartButton onClick={showCartHandler} />
    </Fragment>
  )
}

export default Cart
