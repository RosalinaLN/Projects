import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { deleteItem, getItems } from '../actions/itemAction';
import AddNewItem from './AddNewItem';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems(); //call this to get all updated list from monggoDB then save it to state in item reducer
    }

    render() { 
        //console.log(this.props);
        const { items } =  this.props.item;  //remember we have the rootReducer that combine itemReducer and others
        //console.log(items);
        return (
            <Container>

                <ListGroup style={{marginTop:'2rem'}} >
                    <TransitionGroup className="shopping-list">
                        {
                            items && items.map(({_id, name}) => {
                                return (
                                    <CSSTransition key={_id} timeout={500} classNames="fade">
                                        <ListGroupItem>
                                            {
                                                this.props.isAuthenticated ? (
                                                <Button className="remove-btn" color="danger" size="sm" 
                                                onClick={() => this.props.deleteItem(_id)}>
                                                &times;
                                            </Button>
                                                ) : null

                                            }
                                            {name}
                                        </ListGroupItem>
                                    </CSSTransition>
                                )
                            })
                        } 
                    </TransitionGroup>
                </ListGroup>

                <AddNewItem />

            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.item,
        isAuthenticated: state.auth.isAuthenticated
    }
}
 
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);