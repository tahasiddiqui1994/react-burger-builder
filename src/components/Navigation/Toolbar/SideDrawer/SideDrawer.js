 import React from 'react' ;
 import Logo from '../../../Logo/Logo' ;
 import NavItems from '../../NavItems/NavItems' ;
 import CSS from './SideDrawer.module.css' ;
 import BackDrop from '../../../UI/BackDrop/BackDrop';
 import Aux from '../../../../HOC/Auxiliary' ;

 const SideDrawer = ( props ) => {

    let classes = [CSS.SideDrawer, CSS.Close] ;
    if(props.drawerStatus) {
        classes = [CSS.SideDrawer, CSS.Open] ;
    }

   return (
    <Aux>
        <BackDrop show={props.drawerStatus} clicked={props.closeSideDrawer}/>
        <div className={classes.join(' ')}>
            <div className={CSS.Logo}>
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
        </div>
    </Aux>
   )
 }
 
 export default SideDrawer ;