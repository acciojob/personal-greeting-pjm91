
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [input,setInput]= useStae('');
  const onInput = (e)=>{
    const{value} = e.target
    setInput(value)
  }
const onClear = ()=>{
  setInput('')
}

  return (
    <div>
       
    <p>Enter Your Name</p>
    <input value={input} onChange={onInput} />
    {!!input.length&&<p>Hello {input}!</p>}
    <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default App
