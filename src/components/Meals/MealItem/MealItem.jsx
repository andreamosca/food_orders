import { useContext } from "react"
import CartContext from "../../../store/cart-context"

import classes from "./MealItem.module.css"
import MealItemActions from "./MealItemActions"

const MealItem = props => {
  const price = `€${props.price.toFixed(2)}`
  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemActions onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
