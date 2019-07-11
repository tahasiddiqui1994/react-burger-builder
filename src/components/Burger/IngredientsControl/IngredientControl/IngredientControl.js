import React from 'react' ;
import CSS from './IngredientControl.module.css' ;

const IngredientsControl = ( props ) => {
  return (
    <div className={CSS.BuildControl}>
      <div className={CSS.Label}>{props.label}</div>
      <button className={CSS.Less}>Less</button>        
      <button className={CSS.More}>More</button>        
    </div>
  )
}

export default IngredientsControl ;
