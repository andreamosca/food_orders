import { useContext } from "react"
import CartContext from "../../../store/cart-context"
import CartIcon from "../../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext)

  const numberOfItems = cartCtx.items.reduce(
    (total, item) => total + item.amount,
    0
  )

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Il tuo carrello</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default HeaderCartButton
