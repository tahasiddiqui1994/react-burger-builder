import React from 'react'
import CSS from './Modal.module.css' ;
const Modal = ( props ) => {
  return (
    <div className={CSS.Modal}>
        {props.children}
    </div>
  )
}

export default Modal
