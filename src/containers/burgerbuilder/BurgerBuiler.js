import React, { Component } from 'react'
import Auxcomp from '../../hoc/AuxComp'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
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