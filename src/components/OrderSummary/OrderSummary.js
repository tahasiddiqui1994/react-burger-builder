import React from 'react'

const styleLine = {
        display: "block",
        height: "1px",
        border: "0",
        // border-top: "1px solid #ccc",
        margin: "1em 0",
        padding: "0"
} ;
const OrderSummary = ( props ) => {
    const ingredients = Object.keys(props.ingredients) .map(ing => {
        return <li><span style={{textTransform: 'capitalize'}}>{ing}</span>: {props.ingredients[ing]}</li>
    }) ;
  return (
    <div>
      <h3> Your Order </h3>
      <p> Your selected ingredients are as follows: </p>
      <ul>
        {ingredients}
      </ul>
      <hr style={styleLine}/>
      
      <p> Continue to checkout ? </p>
    </div>
  )
}

export default OrderSummary
