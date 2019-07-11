import React, { Component } from 'react' ;
import Aux from '../../HOC/Auxiliary' ;
import Burger from '../../components/Burger/Burger' ;
import IngredientsControl from '../../components/Burger/IngredientsControl/IngredientsControl'

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
    }
  }
  
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <IngredientsControl />
      </Aux>
    )
  }
}

export default BurgerBuilder ;
