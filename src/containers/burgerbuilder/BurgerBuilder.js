import React, { Component } from 'react'
import Auxcomp from '../../hoc/AuxComp'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/Burger'



const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },

        totalPrices: 4

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        };
        const updatedCounted = oldcount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES [type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingrdients: updatedIngredients});

    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldcount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES [type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingrdients: updatedIngredients});

    };



        render() {
            return (
                <Auxcomp>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}/>
                </Auxcomp>
            )
        }
    }

    export default BurgerBuilder