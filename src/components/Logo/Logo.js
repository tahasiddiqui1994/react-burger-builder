import React from 'react' ;
import logoPNG from '../../assets/Images/burger-logo.png' ;
import CSS from './Logo.module.css'

const Logo = ( props ) => (
    <div className={CSS.Logo} style={{height: props.height}}>
        <img src={logoPNG} alt="Anday Wala Burger"></img>
    </div>
) ;

export default Logo ;
