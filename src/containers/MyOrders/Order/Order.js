import React from 'react' ;
import CSS from './Order.module.css' ;

const Order = ( props ) => {

    let Ingredients = [] ;
    for(let ing in props.order.ingredients) {
        Ingredients.push({
            name: ing, amount: props.order.ingredients[ing]
        })
    }
    // console.log(Ingredients)

    const ingredientsText = Ingredients.map(ing => {
        return <span key={ing.name+ing.amount} className={CSS.Span}>
            {ing.name}: {ing.amount}
        </span>
    })

    return (
        <div className={CSS.Order}>
            <p>Ingredients: {ingredientsText}</p>
            <p>Price: <strong>{props.order.price}</strong> </p>
        </div>
    )
}

export default Order ;
