import React from 'react'
import SignUp from '../auth/SignUp'
import SignIn from '../auth/SignIn'
import SearchBar from '../hooks/searchBar/searchBar'

import { Nav, Navbar, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { header } from '../../stylesheets/stylesheet.scss'

import { navlink, logo, LogoSearch } from './header.module.scss'

const authenticatedOptions = (
    <div className='auth'>
        <Nav.Link href=''>Logout</Nav.Link>
    </div>
)

const unauthenticatedOptions = (
    <div className='auth'>
        <SignUp />
        <SignIn />
    </div>
)

const alwaysOptions = (
    <div className='d-flex justify-content-between mb-6'>
        <DropdownButton variant='body' id='aboutCovid' title='About Covid'>
            <Dropdown.Item>
                About Covid-19
            </Dropdown.Item>
        </DropdownButton>
        <DropdownButton variant='body' id='learnFacts' title='Learn Facts'>
            <Dropdown.Item href='/transmission'>
                  Transmission
            </Dropdown.Item>
            <Dropdown.Item href=''>
                Fact Link 2
            </Dropdown.Item>
            <Dropdown.Item href=''>
                Fact Link 3
            </Dropdown.Item>
        </DropdownButton>
        <Button variant='body' href='/vaccinepage'>
          Find A Vaccine
        </Button>
        <Button variant='body' href=''>
          Get Tested
        </Button>
        <Button variant='body' href=''>
          Data
        </Button>
        <Button variant='body' href=''>
          Travel
        </Button>
    </div>
)

const Header = ({ user, children }) => {
    return (
        
        <div id='header'>
            <div className='d-flex justify-content-between mb-2'>
                <Navbar.Brand className='text-dark' id={logo} href='/'>
                    VaxFacts
                </Navbar.Brand>
                <SearchBar className={LogoSearch}/>
            </div>
            <Navbar bg="secondary" variant="dark" expand="md" id='nav'>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='d-flex justify-content-space-evenly'>
                    { alwaysOptions }
                    { user ? authenticatedOptions : unauthenticatedOptions }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header