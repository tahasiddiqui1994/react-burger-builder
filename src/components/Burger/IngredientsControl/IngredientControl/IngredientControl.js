import React from 'react' ;
import CSS from './IngredientControl.module.css' ;

const IngredientsControl = ( props ) => {
	return (
		<div className={CSS.BuildControl}>
			<div className={CSS.Label}>{props.label}</div>
			<button className={CSS.Less} onClick={props.remove} disabled={props.disableLess}>Less</button>        
			<button className={CSS.More} onClick={props.add} disabled={props.disableMore}>More</button>        
		</div>
	)
}

export default IngredientsControl ;
