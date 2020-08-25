import React from 'react'
import Auxcomp from '../../hoc/AuxComp'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css'


const layout = ( props ) =>(
 <Auxcomp>
     <Toolbar />
     <div>
         Toolbar, Sidedrawer, Backdrop
     </div>
     <main className={classes.Content}>
         {props.children}
     </main>

 </Auxcomp>
);

export default layout;