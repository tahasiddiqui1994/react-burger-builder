import React, { Component } from 'react' ;
import Aux from '../../HOC/Auxiliary' ;
import CSS from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar' ;
import SideDrawer from '../Navigation/Toolbar/SideDrawer/SideDrawer' ;

class Layout extends Component {

	state = {
		sideDrawer: false
	}

	closeSideDrawer = () => {
		this.setState({
			sideDrawer: false
		})
	}
	openSideDrawer = () => {
		this.setState({
			sideDrawer: true
		})
	}
	toggleSideDrawer = () => {
		this.setState((prevState) => {
			return {
				sideDrawer: !prevState.sideDrawer
			}
		}) ;
	}

	render() {
		return (
			<Aux>
				<Toolbar toggleSideDrawer={this.toggleSideDrawer} />
				<SideDrawer drawerStatus={this.state.sideDrawer}
					closeSideDrawer={this.closeSideDrawer} />
				<main className={CSS.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout ;
