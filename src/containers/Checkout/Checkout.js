import React, { Component } from 'react' ;
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary' ;

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }

    cancelOrder = () => {
        this.props.history.goBack()
    }
    continueOrder = () => {
        
    }

    render() {
        return (
        <div>
            <CheckoutSummary
                cancelOrder={this.cancelOrder}
                continueOrder={this.continueOrder}
                ingredients={this.state.ingredients} />
        </div>
        )
    }
}

export default Checkout ;