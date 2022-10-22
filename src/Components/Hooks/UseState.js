import React from 'react'
import Button from './Button'
import './counter.css'

function LearnHooks() {
  return (
    <div className='counter-container' >
        <Button text = "minus" symbol = "-" />
          count = 0
        <Button text = "plus" symbol = "+" />
        <Button text = "Submit" symbol = "=" />
    </div>
  )
}

export default LearnHooks