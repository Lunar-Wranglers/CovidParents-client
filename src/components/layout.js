import * as React from 'react'
import { Link } from 'gatsby'

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

            </main>
        </div>
    )
}

export default Layout
