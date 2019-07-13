import React from 'react' ;
import CSS from './NavItems.module.css' ;
import NavItem from './NavItem/NavItem' ;

const NavItems = () => (
    <ul className={CSS.NavItems}>
        <NavItem link="/" active/*={true}*/> Burger Builder </NavItem>
        <NavItem link="/" >Checkout</NavItem>
    </ul>
) ;

export default NavItems ;
