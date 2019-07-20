import React, { Component } from 'react' ;
import axios from '../../axios-orders' ;
import Order from './Order/Order' ;
import CSS from './MyOrders.module.css' ;
import Spinner from '../../components/UI/Spinner/Spinner' ;
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';

class MyOrders extends Component {

    state ={
        myorders: [],
        loading: true,
    }
    componentDidMount() {
        axios.get('/checkout.json').then(data => {
            // console.log(data) ;
            let orders = [] ;
            for(let key in data.data) {
                orders.push({
                    id: key, ...data.data[key]
                }) ;
            }
            this.setState({ loading: false, myorders: orders }) ;
            // console.log("Orders: ", this.state.myorders) ;
            
        }).catch(err => {
            // console.log("Error: ", err) ;
            this.setState({ loading: false }) ;
        }) ;
    }

    render() {
        const myorders = this.state.myorders.map(order => {
            return <Order key={order.id} order={order}/>
        }) ;
        return (
        <div className={CSS.MyOrders}>
            {this.state.loading ? <Spinner /> : myorders}
        </div>
        )
    }
}

export default withErrorHandler(MyOrders, axios) ;
