import React from 'react';
import Classes from "./Modal.css";
import Auxcomp from "../../../hoc/AuxComp"
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <Auxcomp>
        <Backdrop
            show={props.show} clicked={props.modalClosed}>
        </Backdrop>
        <div
            className={Classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>

    </Auxcomp>

);

export default modal;

