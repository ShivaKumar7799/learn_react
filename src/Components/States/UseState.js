import React, { useState } from 'react'
import './UseState.css'

function UseState() {
  console.log("useState component rendered")
  const [count, setCount] = useState(0)
  const decrementFunc = () => {
    console.log("decrement Btn clicked")
    setCount(count - 1)
  }
  return (
    <div className='counterContainer' >
      <button onClick={() => {console.log("increment Btn clicked"); setCount(count + 1)}} className='incrementBtn' >+</button> 
      <span>Count = {count} </span>
      <button onClick={decrementFunc} className='decrementBtn' >-</button>
      <button onClick={() => setCount(count + 10)} >+10</button>
      <button onClick={() => setCount(count - 10)} >-10</button>
    </div>
  )
}

export default UseState