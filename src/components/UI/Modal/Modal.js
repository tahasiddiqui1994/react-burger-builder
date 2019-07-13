import React, { Component } from 'react'
import CSS from './Modal.module.css' ;
import Aux from '../../../HOC/Auxiliary' ;
import BackDrop from '../BackDrop/BackDrop' ;

class Modal extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show ;
	}
	
	componentDidUpdate() {
		console.log("Modal Component will update") ;
	}

	render() {
		return (
			<Aux>
				<BackDrop show={this.props.show} clicked={this.props.closeOrderNow} />
				<div className={CSS.Modal}
					style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0' }}>
					{this.props.children}
				</div>
			</Aux>
		)
	}
}

export default Modal
 