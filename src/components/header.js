import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import SignUp from './SignUp'
import SignIn from './SignIn'
import SearchBar from './searchBar'

import { Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap'
import { 
    LogoSearch
 } from './header.module.css'

const authenticatedOptions = (
    <Fragment>
        <Nav.Link href=''>Logout</Nav.Link>
    </Fragment>
)

const unauthenticatedOptions = (
    <Fragment>
        <SignUp />
        <SignIn />
    </Fragment>
)

const alwaysOptions = (
    <Fragment>
        <DropdownButton id='aboutCovid' title='About Covid'>
            <Dropdown.Item>
                About Covid-19
            </Dropdown.Item>
        </DropdownButton>
        <DropdownButton id='learnFacts' title='Learn Facts'>
            <Dropdown.Item href=''>
                Fact Link 1
            </Dropdown.Item>
            <Dropdown.Item href=''>
                Fact Link 2
            </Dropdown.Item>
            <Dropdown.Item href=''>
                Fact Link 3
            </Dropdown.Item>
        </DropdownButton>
        <Link to=''>Find A Vaccine</Link>
        <Link to=''>Get Tested</Link>
        <Link to=''>Data</Link>
        <Link to=''>Travel</Link>
    </Fragment>
)

const Header = ({ user, children }) => {
    return (
        
        <Fragment>
            <div>
                <Navbar.Brand href='#'>
                    VaxFacts
                </Navbar.Brand>
                <SearchBar className='logosearch'/>
            </div>
            <Navbar bg="primary" variant="dark" expand="md" id='nav'>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    { alwaysOptions }
                    { user ? authenticatedOptions : unauthenticatedOptions }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header