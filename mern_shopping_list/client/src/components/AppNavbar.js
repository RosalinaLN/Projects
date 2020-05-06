import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import { connect } from 'react-redux';
import LoginModal from './auth/LoginModal';

class AppNavbar extends Component {

    state = {
      isOpen: false
    }

    toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
      const { isAuthenticated, user } = this.props.auth;

      return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {
                  isAuthenticated ? (
                    <Fragment>
                      <NavItem>
                        <span className="navbar-text">
                          { user ? (`Welcome ${user.name}`) : ('') }
                        </span>
                      </NavItem>
                      <Logout />
                    </Fragment>
                  ) : (
                    <Fragment>
                    <RegisterModal />
                    <LoginModal />
                    </Fragment>
                  )

                }
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }

}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
 
export default connect(mapStateToProps, null)(AppNavbar);