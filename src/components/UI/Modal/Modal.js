import React from 'react';
import Classes from "./Modal.css";
import Auxcomp from "../../../hoc/AuxComp"
import BackDrop from '../BackDrop/Backdrop'

const modal = (props) => (
    <Auxcomp>
        <BackDrop
            show={props.show} clicked={props.modalClosed}>
        </BackDrop>
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

