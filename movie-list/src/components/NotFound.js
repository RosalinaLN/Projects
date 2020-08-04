import React from 'react';
import Container from 'react-bootstrap/Container'
import Header from './shared/Header';

const NotFound = () => {
    return (
        <Container>
            <Header title="404" />
            <div align="center">
                404 Page Not Found
            </div>
        </Container>
    );
}
 
export default NotFound;