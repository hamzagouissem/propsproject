import React from 'react'
import PropTypes from 'prop-types'
import { Container, Navbar } from 'react-bootstrap'
import Profile from './../profile/Profile';

const NaveBar = ({ login }) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            
                            <p> <button>My Profile</button></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
NaveBar.defaultProps={
    login:"User full Name"
}
NaveBar.propTypes = {
    login: PropTypes.string,
};

export default NaveBar