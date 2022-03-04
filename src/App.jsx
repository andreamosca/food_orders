import { Fragment } from "react"
import "./App.css"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header/Header"
import Meals from "./components/Meals/Meals"

function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header/>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  )
}

export default App
