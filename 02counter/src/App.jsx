import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]= useState(15);
//  let counter=15;
  const addValue=()=>{
    if(counter<20){
    counter+=1;
    setCounter(counter);
    console.log("Value added", counter);
    }
    else console.log("Value can't be added", counter);
  }
  const remValue=()=>{
    if(counter>0){
    counter-=1;
    setCounter(counter);
    console.log("Value removed", counter);
    }
    else console.log("Value can't be removed", counter);
  }
  return (
    <>
      <h1>chai aur main</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}
      >Add Value</button>
      <br/>
      <button onClick={remValue}>Remove Value</button>
    </>
  )
}


export default App
