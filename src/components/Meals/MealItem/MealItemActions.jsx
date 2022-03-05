import classes from "./MealItemActions.module.css"
import Input from "../../UI/Input"
import { useRef, useState } from "react"

const MealItemActions = props => {
  const [isActionValid, setActionValid] = useState(true)
  const amountInputRef = useRef()
  
  const submitHandler = event => {
    event.preventDefault()
    const amount = +amountInputRef.current.value
    if (
      amountInputRef.current.value.trim().length === 0 ||
      amount < 1 ||
      amount > 5
    ) {
      setActionValid(false)
    }

    props.onAddToCart(amount)

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      {!isActionValid && <p>Inserisci un valore valido (1-5)</p>}
    </form>
  )
}

export default MealItemActions
