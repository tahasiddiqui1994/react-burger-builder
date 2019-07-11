import React from 'react' ;
import CSS from './Burger.module.css' ;
import Ingredients from './Ingredients/Ingredients' ;

const Burger = ( props ) => {
  const middle = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        //console.log(_ , i) ;
        <Ingredients key={i} type={ingredient} />
      }) ;
    }) ;
  //console.log(middle)
  return (
    <div className={CSS.Burger}> 
      <Ingredients type="bread-top" />
      {middle}
      <Ingredients type="bread-bottom" />
    </div>
  ) ;
} ;

export default Burger ;
