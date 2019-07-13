import React from 'react' ;
import CSS from './Toolbar.module.css' ;
import Logo from '../../Logo/Logo' ;
import NavItems from '../NavItems/NavItems' ;
import ToggleSideDrawer from './SideDrawer/ToggleSideDrawer/ToggleSideDrawer';

const Toolbar = ( props ) => (
    <header className={CSS.Toolbar}>
        <ToggleSideDrawer clicked={props.toggleSideDrawer}/>
        <div className={CSS.Logo}>
            <Logo />
        </div>
        <nav className={CSS.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
) ;

export default Toolbar ;