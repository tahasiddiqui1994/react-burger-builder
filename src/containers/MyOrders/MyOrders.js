import React, { Component } from 'react'
import axios from '../../axios-orders' ;
import Order from './Order/Order' ;

class MyOrders extends Component {
    render() {
        return (
        <div>
            <Order />
            <Order />
        </div>
        )
    }
}

export default MyOrders
