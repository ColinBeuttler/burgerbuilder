import React from 'react'
import Auxcomp from '../../hoc/AuxComp'


const layout = ( props ) =>(
 <Auxcomp>
     <div>
         Toolbar, Sidedrawer, Backdrop
     </div>
     <main>
         {props.children}
     </main>

 </Auxcomp>
);

export default layout;