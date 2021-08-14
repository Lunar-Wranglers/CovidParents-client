import * as React from 'react'

import Header from './header'
import { container } from '../../stylesheets/stylesheet.scss'

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
