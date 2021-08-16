import * as React from 'react'

import Header from './header'
import Footer from './footer'
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
                <Footer />
            </main>
        </div>
    )
}

export default Layout
