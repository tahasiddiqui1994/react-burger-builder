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
			<p>
				Current Price: {props.totalPrice.toFixed(2)}
			</p>
				{
					controls.map(ing => <IngredientControl key={ing.label} label={ing.label}
													add={() => props.addIngredient(ing.type)}
													remove={() => props.removeIngredient(ing.type)}
													disableLess = {props.total[ing.type] < 1 ? true : false}
													disableMore = {props.total[ing.type] > 2 ? true : false} />)
				}
		</div>
	)
}

export default IngredientsControl ;
