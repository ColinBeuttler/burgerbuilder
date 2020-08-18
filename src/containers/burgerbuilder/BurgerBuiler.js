import React, {Component} from 'react'
import Auxcomp from '../../hoc/AuxComp'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return(
            <Auxcomp>
                <Burger />
                <div>
                    Burger Controls
                </div>
            </Auxcomp>
        )
    }
}

export default BurgerBuilder