import React from 'react' ;
import CSS from './IngredientsControl.module.css' ;
import IngredientControl from './IngredientControl/IngredientControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
] ;

const IngredientsControl = ( props ) => {
  return (
    <div className={CSS.IC}>
        {
            controls.map(ing => <IngredientControl key={ing.label} label={ing.label}/>)
        }
    </div>
  )
}

export default IngredientsControl ;
