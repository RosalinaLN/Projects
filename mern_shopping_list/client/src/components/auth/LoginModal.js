import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, NavLink, NavItem, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';
import propTypes from 'prop-types';

class LoginModal extends Component {
    state = { 
        msg: null,
        email: '',
        pasword: '',
        modal: false
    }

    static propTypes = {
        isAuthenticated: propTypes.bool,
        error: propTypes.object.isRequired,
        login: propTypes.func.isRequired,
        clearErrors: propTypes.func.isRequired   
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            //check for register error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            }
            else {
                this.setState({ msg: null })
            }
        }

        //if authenticated, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
                //clear the form
                this.setState({ email: '', password: ''});
            }
        }
    }

    toggle = () => {
        //to clear the error when modal close/open
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {email,password} = this.state;

        this.props.login({ email, password });

        //dont close the modal yet, in case there is an error
    }
    
    render() { 

        return (
            <div>
                <NavItem>
                    <NavLink onClick={this.toggle}>Login</NavLink>
                </NavItem>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            { this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null }
                            <div>
                                <label htmlFor="email">Email</label><br/>
                                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label><br/>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <Button color="dark" style={{marginTop:'20px'}}>Submit</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error
    }
}
 
export default connect(mapStateToProps, { login, clearErrors })(LoginModal);