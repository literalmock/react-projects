import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("green")
  let body = document.body
  async function changeclr(x) {
    let rang = x.target.innerHTML
    body.style.backgroundColor = rang

  }

  return (
    <>
      <button onClick={changeclr} className=" h-auto bg-red-600 flex flex-wrap  " style={{ backgroundColor: { color } }} > red </button>         <button onClick={changeclr} className=" justify-center bg-blue-600 flex flex-wrap bottom-1" style={{ backgroundColor: { color } }} > Blue </button>
      <button onClick={changeclr} className=" justify-center bg-yellow-600 flex flex-wrap bottom-1" style={{ backgroundColor: { color } }} > yellow </button>
      <button onClick={changeclr} className=" justify-center bg-orange-600 flex flex-wrap bottom-1" style={{ backgroundColor: { color } }} > Orange </button>
      <button onClick={changeclr} className=" justify-center bg-indigo-600 flex flex-wrap bottom-1" style={{ backgroundColor: { color } }} > Indigo </button>
      <button onClick={changeclr} className=" justify-center bg-teal-600 flex flex-wrap bottom-1" style={{ backgroundColor: { color } }} > Teal </button>

    </>
  )
}

export default App
