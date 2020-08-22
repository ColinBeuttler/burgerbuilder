import PropTypes from 'prop-types'
import classes from "./BurgerIngredients.css"
import React, { Component } from 'react';

class BurgerIngredient extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state= {}

    // }

    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,

        }
    }

    render() {

        let ingredient = null;

        switch ( this.props.type )  {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;

            case ("bread-top"):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;

            case ('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;

            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;

            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;

            case ('meat'):
                ingredient = <div className={classes.Meat}></div>
                break;

            default:
                ingredient = null;

        }

        return ingredient;
    };

}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}



export default BurgerIngredient