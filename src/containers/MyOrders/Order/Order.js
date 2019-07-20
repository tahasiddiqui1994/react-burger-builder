import React from 'react' ;
import CSS from './Order.module.css' ;

const Order = ( props ) => {
    return (
        <div className={CSS.Order}>
            <p>Ingredients: </p>
            <p>Price: </p>
        </div>
    )
}

export default Order ;
