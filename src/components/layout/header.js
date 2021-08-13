import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import SignUp from '../auth/SignUp'
import SignIn from '../auth/SignIn'
import SearchBar from '../searchBar'

import { Nav, Navbar, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { LogoSearch } from './header.module.css'

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
    </div>
)

const Header = ({ user, children }) => {
    return (
        
        <Fragment>
            <div className='d-flex justify-content-between mb-2'>
                <Navbar.Brand className='text-dark' href='#'>
                    VaxFacts
                </Navbar.Brand>
                <SearchBar className={LogoSearch}/>
            </div>
            <Navbar bg="secondary" variant="dark" expand="md" id='nav'>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='d-flex justify-content-between'>
                    { alwaysOptions }
                    { user ? authenticatedOptions : unauthenticatedOptions }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header