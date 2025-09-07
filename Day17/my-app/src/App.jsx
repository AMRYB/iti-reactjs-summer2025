// import { Fragment } from "react"

import Task from "./components/task"
import User from "./components/Movie"
import USers from "./components/Movies"

function App() {
  var x = "React Group 2"
  var styleObj={backgroundColor:"red" , margin :20 , color:"white"}
  return (
    <>
    <USers></USers>
    {/* <User></User> */}
    <Task></Task>
    {/* <div style={{backgroundColor:"red" , margin :20 , color:"white"}}>ay 7agaaaa</div>
    <div className="c1">ay7aga</div>
      <label htmlFor="inp">Name</label>
      <input id="inp"></input>
      <h1>hello ya {x.toLocaleUpperCase()}</h1>
      <h1>hi ya {x.toLocaleUpperCase()}</h1> */}
    </>
  )
}

export default App
