import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/style/Header.css'
import { Container, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'


function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="https://www.youtube.com/channel/UCG2ovypNCpVOTFeY1YCocmQ"
                            target="_brank"
                        >
                            Photo App
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className='header__link'
                            to="/photo"
                            activeClassName='header__link--active'
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

Header.propTypes = {

}

export default Header

