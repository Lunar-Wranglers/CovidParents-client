import * as React from 'react'
import { Link } from 'gatsby'
import SignUp from './SignUp'

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
            </main>
        </div>
    )
}

export default Layout
