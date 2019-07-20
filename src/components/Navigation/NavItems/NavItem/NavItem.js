import React from 'react' ;
import { NavLink } from 'react-router-dom'
import CSS from './NavItem.module.css' ;

const NavItem = ( props ) => (
    <li className={CSS.NavItem}>
        <NavLink to={props.link} activeClassName={CSS.active} >
            {props.children}
        </NavLink>
    </li>
)

export default NavItem ;
