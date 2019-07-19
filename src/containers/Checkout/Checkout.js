import React, { Component } from 'react' ;
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary' ;

class Checkout extends Component {
    
    state = {
        ingredients: null
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        let paramIngredients = {} ;
        for(let param of query.entries()) {
            paramIngredients[param[0]] = 1*param[1]
        }
        this.setState({ingredients: paramIngredients})
        // console.log("Params: " + paramIngredients) ;
        // console.log("State: " + this.state.ingredients) ;
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
