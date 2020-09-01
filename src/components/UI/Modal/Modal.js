import React, { Component } from 'react';
import Classes from "./Modal.css";
import Auxcomp from "../../../hoc/AuxComp/AuxComp"
import BackDrop from '../Backdrop/backdrop'

class Modal extends Component {

shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !==this.props.show || nextProps.children !== this.props.children;
};

componentWillUpdate () {
    console.log ('[Modal] WillUpdate');
}


    render() {

        return (
        <Auxcomp>
            <BackDrop
                show={this.props.show} clicked={this.props.modalClosed}>
            </BackDrop>
            <div
                className={Classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>

        </Auxcomp>)


    }
};

export default Modal;

