import * as React from 'react'
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
    
)

const Header = ({ children }) => {
    return (
        <div>
            <div className='logosearch'>
                <Link to='/' id='Logo'>Logo</Link>
                <SearchBar />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to=''>About Covid-19</Link>
                    </li>
                    <li>
                        <Link to=''>Learn Facts</Link>
                    </li>
                    <li>
                        <Link to=''>Find A Vaccine</Link>
                    </li>
                    <li>
                        <Link to=''>Get Tested</Link>
                    </li>
                    <li>
                        <Link to=''>Data</Link>
                    </li>
                    <li>
                        <Link to=''>Travel</Link>
                    </li>
                </ul>
                <SignUp />
                <SignIn />
            </nav>
        </div>
    )
}

export default Header