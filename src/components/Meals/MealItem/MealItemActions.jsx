import classes from "./MealItemActions.module.css"
import Input from "../../UI/Input"

const MealItemActions = props => {
  return (
    <form className={classes.form} action="#">
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+</button>
    </form>
  )
}

export default MealItemActions
