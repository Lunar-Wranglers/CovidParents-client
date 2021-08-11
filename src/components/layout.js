import * as React from 'react'
import { Link } from 'gatsby'

import Header from './header'
import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>
                {pageTitle}
            </title>
            <main>
                <Header />
                <div className={container}>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
