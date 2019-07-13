import React from 'react' ;
import CSS from './Burger.module.css' ;
import Ingredients from './Ingredients/Ingredients' ;

const Burger = ( props ) => {
  //let tt = 0 ;
  let middle = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        //console.log("Underscore: "+ _ , " i: "+ i) ;
        //tt++
        return <Ingredients key={i+ingredient} type={ingredient} />
      }) ;
    }).reduce ((arr, el) => {
      //console.log("arr: "+ arr , " el: "+ el) ;
      return arr.concat(el)
    }, []) ;

    if(middle.length === 0) {
      middle = <p> Please start adding ingredients </p>
    }
    
  return (
    <div className={CSS.Burger}> 
      <Ingredients type="bread-top" />
      {middle}
      <Ingredients type="bread-bottom" />
    </div>
  ) ;
} ;

export default Burger ;
