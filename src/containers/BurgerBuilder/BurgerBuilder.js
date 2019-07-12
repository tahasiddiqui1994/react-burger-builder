import React, { Component } from 'react' ;
import Aux from '../../HOC/Auxiliary' ;
import Burger from '../../components/Burger/Burger' ;
import IngredientsControl from '../../components/Burger/IngredientsControl/IngredientsControl'

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
		totalPrice: 0
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
	
	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<IngredientsControl addIngredient={this.addIngredient}
					removeIngredient={this.removeIngredient}
					total={this.state.ingredients}
					totalPrice={this.state.totalPrice} />
			</Aux>
		)
	}
}

export default BurgerBuilder ;
