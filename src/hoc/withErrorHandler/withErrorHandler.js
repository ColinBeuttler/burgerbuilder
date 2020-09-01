import React, { Component } from 'react';
import Auxcomp from '../AuxComp/AuxComp';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHanlder = (WrappedComponenet, axios) => {
    return class extends Component {

        state = {
            error: null,
        };


        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })
        }
        componentWillUnmount() {
            // console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor)

        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Auxcomp>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponenet {...this.propsprops} />
                </Auxcomp>
            );
        }
    };
}

export default withErrorHanlder;