import React from 'react'
import classes from './Button.css'

const button = () => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clikced}>
        {props.children}

    </button>
);

export default button