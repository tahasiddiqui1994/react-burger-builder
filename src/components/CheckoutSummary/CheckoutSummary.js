import React from 'react' ;
import Burger from '../Burger/Burger' ;
import CSS from './CheckoutSummary.module.css' ;
import Button from '../UI/Button/Button' ;

const CheckoutSummary = ( props ) => {
  return (
    <div className={CSS.CheckoutSummary}>
      <h1> Your Burger! </h1>
      <div style={{width: "100%", margin: "auto"}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.cancelOrder} buttonType="Danger">Cancel</Button>
      <Button clicked={props.continueOrderNow} buttonType="Success">Proceed to Payment and Contact Info</Button>
    </div>
  )
}

export default CheckoutSummary ;
