import React, { Component } from 'react' ;
import Aux from '../../HOC/Auxiliary' ;
import Burger from '../../components/Burger/Burger' ;
import IngredientsControl from '../../components/Burger/IngredientsControl/IngredientsControl' ;
import Modal from '../../components/UI/Modal/Modal' ;
import OrderSummary from '../../components/OrderSummary/OrderSummary' ;
import axios from '../../axios-orders' ;
import Spinner from '../../components/UI/Spinner/Spinner' ;

const INGREDIENT_PRICE = {
	salad: 25,
	bacon: 80,
	cheese: 40,
	meat: 130
}
class BurgerBuilder extends Component {

	// constructor(props) {
	//   super(props)
	//   this.state = {
			 
	//   }
	// }
	state = {
		ingredients: {
			salad: 0,
			cheese: 0,
			bacon: 0,
			meat: 0
		},
		totalPrice: 0,
		orderNow: false,
		loading: false
	}
	
	addIngredient = (type) => {
		const newTypeCount = this.state.ingredients[type] + 1 ;
		const newIngredients = {...this.state.ingredients} ;
		newIngredients[type] = newTypeCount ;
		const newTypePrice = this.state.totalPrice + INGREDIENT_PRICE[type] ;
		this.setState({
			totalPrice: newTypePrice,
			ingredients: newIngredients
		}) ;
	}

	removeIngredient = (type) => {
		const newTypeCount = this.state.ingredients[type] - 1 ;
		const newIngredients = {...this.state.ingredients} ;
		newIngredients[type] = newTypeCount ;
		const newTypePrice = this.state.totalPrice - INGREDIENT_PRICE[type] ;
		this.setState({
			totalPrice: newTypePrice,
			ingredients: newIngredients
		}) ;
	}

	orderNow = () => {
		this.setState({
			orderNow: true
		}) ;
	}
	closeOrderNow = () => {
		this.setState({
			orderNow: false
		}) ;
	}
	continueOrderNow = () => {
		// alert("CONTINUED !!!") ;
		
		this.setState({
			loading: true
		}) ;
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			deliveryMethod: "fastest",
			customer: {
				name: "Taha",
				address: "B-66 Gulshan-e-Rafi",
				cellNo: "03032535638",
			}
		}
		axios.post('/checkout.json', order)
			.then(data =>{
				console.log("Data: "+data) ;

				this.setState({
					loading: false,
					orderNow: false
				}) ;
				// setTimeout(() => {
				// 	this.setState({
				// 		loading: false,
				// 		orderNow: false
				// 	}) ;
				// }, 1000)
			}).catch(error => {
				console.log("Error: "+error) ;
				this.setState({
					loading: false,
					orderNow: false
				}) ;
			}) ;
	} ;
	
	render() {
		return (
			<Aux>
				<Modal show={this.state.orderNow} closeOrderNow={this.closeOrderNow}>
					{this.state.loading ? <Spinner /> : 
						<OrderSummary ingredients={this.state.ingredients}
						continueOrderNow={this.continueOrderNow}
						closeOrderNow={this.closeOrderNow}
						totalPrice={this.state.totalPrice}/>
					}
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<IngredientsControl addIngredient={this.addIngredient}
					removeIngredient={this.removeIngredient}
					total={this.state.ingredients}
					totalPrice={this.state.totalPrice}
					orderNow={this.orderNow} />
			</Aux>
		)
	}
}

export default BurgerBuilder ;
