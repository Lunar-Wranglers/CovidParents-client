import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import SignUp from './SignUp'
import SignIn from './SignIn'
import SearchBar from './searchBar'

import { Nav, Navbar, Dropdown, DropdownButton, Button } from 'react-bootstrap'
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
        <DropdownButton variant='body' id='aboutCovid' title='About Covid'>
            <Dropdown.Item>
                About Covid-19
            </Dropdown.Item>
        </DropdownButton>
        <DropdownButton variant='body' id='learnFacts' title='Learn Facts'>
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
        <Button variant='body'>
            <Link to=''>Find A Vaccine</Link>
        </Button>
        <Button variant='body'>
            <Link to=''>Get Tested</Link>
        </Button>
        <Button variant='body'>
            <Link to=''>Data</Link>
        </Button>
        <Button variant='body'>
            <Link to=''>Travel</Link>
        </Button>
    </Fragment>
)

const Header = ({ user, children }) => {
    const SearchStyle = {position:"absolute"}
    return (
        
        <Fragment>
            <div>
                <Navbar.Brand className='text-dark' href='#'>
                    VaxFacts
                </Navbar.Brand>
                <SearchBar className='logosearch' style={SearchStyle}/>
            </div>
            <Navbar bg="secondary" variant="dark" expand="md" id='nav'>
            
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