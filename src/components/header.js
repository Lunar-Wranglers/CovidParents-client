import * as React from 'react'
import { Link } from 'gatsby'
import SearchBar from './searchBar'
import { 
    LogoSearch
 } from './header.module.css'

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
                        <Link to=''>Placeholder 1</Link>
                    </li>
                    <li>
                        <Link to=''>Placeholder 1</Link>
                    </li>
                    <li>
                        <Link to=''>Placeholder 1</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header