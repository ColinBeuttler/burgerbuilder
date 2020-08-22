import React, { Component } from 'react'
import Auxcomp from '../../hoc/AuxComp'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            meat: 2,
            cheese: 2
        }


    }

    render() {
        return (
            <Auxcomp>
                <Burger ingredients={this.state.ingredients} />
                <div>
                    Burger Controls
                </div>
            </Auxcomp>
        )
    }
}

export default BurgerBuilder