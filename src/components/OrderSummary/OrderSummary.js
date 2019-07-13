import React from 'react' ;
import Button from '../UI/Button/Button' ;

const OrderSummary = ( props ) => {
    const ingredients = Object.keys(props.ingredients).map(ing => {
        return <li key={ing}><span style={{textTransform: 'capitalize'}}>{ing}</span>: {props.ingredients[ing]}</li>
    }) ;
  return (
    <div>
      <h3> Your Order </h3>
      <p> Your selected ingredients are as follows: </p>
      <ul>
        {ingredients}
      </ul>
      <p>Total Price: {props.totalPrice.toFixed(2)}</p>
      <p> Continue to checkout ? </p>
      <Button clicked={props.closeOrderNow} buttonType="Danger"> CANCEL ORDER </Button>
      <Button clicked={props.continueOrderNow} buttonType="Success"> CONTINUE </Button>
    </div>
  )
}

export default OrderSummary
