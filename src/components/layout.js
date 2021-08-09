import * as React from 'react'
import { Link } from 'gatsby'

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
            </main>
        </div>
    )
}

export default Layout