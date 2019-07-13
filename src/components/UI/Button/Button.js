import React from 'react' ;
import CSS from './Button.module.css' ;

const Button = ( props ) => (
    <button
        className={[CSS.Button, CSS[props.buttonType]].join(' ')}
        onClick={props.clicked}> {props.children} </button>
) ;

export default Button ;
