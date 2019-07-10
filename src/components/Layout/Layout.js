import React from 'react' ;
import Aux from '../../HOC/Auxiliary' ;

const Layout = ( props ) => {
  return (
    <Aux>
      <div>
          Toolbar, Side Drawer, Back Drop
      </div>
      <main>
          {props.children}
      </main>
    </Aux>
  )
}

export default Layout ;
