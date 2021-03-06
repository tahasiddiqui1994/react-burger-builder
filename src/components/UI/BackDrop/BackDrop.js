import React from 'react' ;
import CSS from './BackDrop.module.css' ;

const BackDrop = ( props ) => {
  return (
    props.show ? <div className={CSS.BackDrop} onClick={props.clicked}></div> : null
  )
}

export default BackDrop
