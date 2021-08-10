import * as React from 'react'
import { Link } from 'gatsby'
import SearchBar from './searchBar'
import { 
    navLinks,
    navLinkItem,
    navLinkText
 } from './layout.module.css'

const Header = ({ children }) => {
    return (
        <div>
            <div>
                <Link to='/'>Logo</Link>
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