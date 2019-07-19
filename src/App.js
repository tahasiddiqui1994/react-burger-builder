import React, { Component } from 'react' ;
import './App.css' ;
import Layout from './components/Layout/Layout' ;
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder' ;
import Checkout from './containers/Checkout/Checkout' ;
import  { BrowserRouter, Route } from 'react-router-dom' ;
// import ContactData from './containers/ContactData/ContactData'

class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<div>
					<Layout>
						<Route path="/" exact component={BurgerBuilder} />
						<Route path="/checkout" exact component={Checkout} />
						{/* <Route path="/checkout/contact-data" component={ContactData} /> */}
					</Layout>
				</div>
			</BrowserRouter>
		) ;
	}
}

export default App ;
