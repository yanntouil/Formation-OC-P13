import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Notifications from './Notifications'

/**
 * Layout
 * @component
 */
export default function Layout({children}) {
    return (
        <>
            <Header />
            {children}
            <Notifications />
            <Footer />
        </>
    )
}
