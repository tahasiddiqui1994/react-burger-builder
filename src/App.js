import React, { Component } from 'react' ;
import './App.css' ;
import Layout from './components/Layout/Layout' ;
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder' ;
import Checkout from './containers/Checkout/Checkout' ;
import  { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import MyOrders from './containers/MyOrders/MyOrders' ;
// import ContactData from './containers/ContactData/ContactData'

class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<div>
					<Layout>
						<Switch>
							<Route path="/checkout" component={Checkout} />
							<Route path='/orders' component={MyOrders} />
							<Route path="/" component={BurgerBuilder} />
							{/* <Route path="/checkout/contact-data" component={ContactData} /> */}
						</Switch>
					</Layout>
				</div>
			</BrowserRouter>
		) ;
	}
}

export default App ;
