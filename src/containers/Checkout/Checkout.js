import React, { Component } from 'react' ;
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary' ;
import ContactData from '../ContactData/ContactData';
import { Route, withRouter } from 'react-router-dom' ;

class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        let paramIngredients = {} ;
        let price = 0 ;
        for(let param of query.entries()) {
            if (param[0] !== 'price') { 
                paramIngredients[param[0]] = 1*param[1]
            } else {
                price = param[1] ;
            }
        }
        this.setState({ingredients: paramIngredients, totalPrice: price}) ;
        // console.log("Params: " + paramIngredients) ;
        // console.log("State: " + this.state.ingredients) ;
    }

    cancelOrder = () => {
        this.props.history.goBack() ;
    }

    continueOrder = () => {
        console.log(this.props)
        console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
        this.props.history.replace('/checkout/contactdata') ;
    }

    render() {
        return (
        <div>
            <CheckoutSummary
                cancelOrder={this.cancelOrder}
                continueOrderNow={this.continueOrder}
                ingredients={this.state.ingredients} />
            {/* <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...this.props} /> */}
            {/*2nd method to access Routing members that is history match etc to export the component by wrapping it HOC withRouter from react-router-dom*/}
            <Route path={this.props.match.path+'/contactdata'} render={(props) =>( <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} /> )}/>
        </div>
        )
    }
}

export default withRouter(Checkout) ;
