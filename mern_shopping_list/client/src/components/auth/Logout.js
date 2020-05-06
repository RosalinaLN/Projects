import React, { Component } from 'react';
import { NavLink, NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import propTypes from 'prop-types';

class Logout extends Component {

    static propTypes = {
        logout: propTypes.func.isRequired
    }

    render() { 
        return (
            <NavItem>
                <NavLink onClick={this.props.logout}>Logout</NavLink>
            </NavItem>
        );
    }
}
 
export default connect(null,{ logout })(Logout);