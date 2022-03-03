import classes from "./MealItem.module.css"
import MealItemActions from "./MealItemActions"


const MealItem = props => {
  const price = `€${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemActions id={props.id}/>
      </div>
    </li>
  )
}

export default MealItem
