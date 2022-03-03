import { Fragment } from "react"
import "./App.css"
import Header from "./components/Layout/Header/Header"
import Meals from "./components/Meals/Meals"

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  )
}

export default App
