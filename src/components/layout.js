import * as React from 'react'
import { Link } from 'gatsby'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Header from './header'
import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <title>
                {pageTitle}
            </title>
            <main>
                <Header />
                {children}
                <SignUp />
                <SignIn />
            </main>
        </div>
    )
}

export default Layout
