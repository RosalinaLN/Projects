import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemAction';

class AddNewItem extends Component {
    state = { 
        name: '',
        modal: false
    }

    toggle = () => {
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
        this.props.addItem({ name: this.state.name});
        //close the modal
        this.toggle();
        //clear the form
        this.setState({ name: ''});
    }
    
    render() { 
        

        return (
            <div>
                {
                    this.props.isAuthenticated ? (
                        <Button color="dark" onClick={this.toggle} style={{marginTop:'20px'}}>Add Item</Button>
                    ) : (
                        <div>Please log in to manage item</div>
                    )
                }
                
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add item to shopping list</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="name">Item</label><br/>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
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
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { addItem })(AddNewItem);