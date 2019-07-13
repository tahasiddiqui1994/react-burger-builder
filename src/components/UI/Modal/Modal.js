import React from 'react'
import CSS from './Modal.module.css' ;
import Aux from '../../../HOC/Auxiliary' ;
import BackDrop from '../BackDrop/BackDrop' ;
const Modal = ( props ) => {
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.closeOrderNow} />
      <div className={CSS.Modal}
          style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0' }}>
          {props.children}
      </div>
    </Aux>
  )
}

export default Modal
 