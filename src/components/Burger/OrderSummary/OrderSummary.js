import React from 'react';
import Auxcomp from '../../../hoc/AuxComp'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}: {props.ingredients[igKey]}
                </span>

            </li>);
        });
    return (
        <Auxcomp>
            <h3>Your Order</h3>
            <p>
                A delicious Burger with the following ingredients:
            </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>
                Continue to Checkout
            </p>

        </Auxcomp>
    )
};

export default orderSummary;