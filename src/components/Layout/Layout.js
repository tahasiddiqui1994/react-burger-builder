import React from 'react' ;
import Aux from '../../HOC/Auxiliary' ;
import CSS from './Layout.module.css'

const Layout = ( props ) => {
	return (
		<Aux>
			<div>
				Toolbar, Side Drawer, Back Drop
			</div>
			<main className={CSS.Content}>
				{props.children}
			</main>
		</Aux>
	)
}

export default Layout ;
