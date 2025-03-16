import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

// hook effect
let [counter, setCounter]=useState(15)


  // let counter = 12
  const addvalue=()=>{
    console.log("clicked",counter);
    counter=counter+1;
    if(counter>20){
      alert("limit reached");
      counter=20;
    }
      
    setCounter(counter);
  }
  const removevalue=()=>{
    counter=counter-1;
    if(counter<0){
      alert("limit reached");
      counter=0;
    }
      
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
