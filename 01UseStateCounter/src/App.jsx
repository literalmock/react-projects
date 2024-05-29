import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(5)
  function addvalue() {
    if (count >= 20) {
      setCounter(20)
    }
    else {
      setCounter(PrevCount => PrevCount + 1)
      setCounter(PrevCount => PrevCount + 1)
      setCounter(PrevCount => PrevCount + 1)
      // setCounter(counter + 1)
    }
  }
  function delvalue() {
    if (count <= 0) {
      setCounter(0)
    }
    else {
      setCounter(count - 1)
    }
  }
  return (
    <div>
      <h1>Code & Decode</h1>
      <h2>Counter Value {count} </h2>
      <button
        onClick={addvalue}>Add value {count}</button>
      <br />
      <button
        onClick={delvalue}>Remove Value {count}</button>
      {/* {console.log(counter)} */}
    </div>
  )
}
export default App