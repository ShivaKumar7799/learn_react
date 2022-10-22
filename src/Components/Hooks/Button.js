import React from 'react'

function Button(props) {
  return (
    <div>
        <button style={{width : "max-content"}} > {props.text} {props.symbol} </button>
    </div>
  )
}

export default Button