import * as React from 'react'
import { Link } from 'gatsby'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>
                {pageTitle}
            </title>
            <main>
                <h1>
                    {pageTitle}
                </h1>
                {children}
                <SignUp />
                <SignIn />
            </main>
        </div>
    )
}

export default Layout
