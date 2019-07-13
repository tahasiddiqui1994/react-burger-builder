import React from 'react' ;
import CSS from './ToggleSideDrawer.module.css'

const ToggleSideDrawer = ( props ) => (
    <div className={CSS.ToggleSideDrawer} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
) ;

export default ToggleSideDrawer ;
