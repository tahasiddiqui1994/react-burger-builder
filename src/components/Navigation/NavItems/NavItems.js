import React from 'react' ;
import CSS from './NavItems.module.css' ;
import NavItem from './NavItem/NavItem' ;

const NavItems = () => (
    <ul className={CSS.NavItems}>
        <NavItem exact link="/"> Burger Builder </NavItem>
        <NavItem link="/orders" >My Orders</NavItem>
    </ul>
) ;

export default NavItems ;
