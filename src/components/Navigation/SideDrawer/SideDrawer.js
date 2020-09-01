import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxcomp from '../../../hoc/AuxComp/AuxComp'


const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Auxcomp>

            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>


                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />

                </nav>
            </div>

        </Auxcomp>
    );
}

export default sideDrawer;