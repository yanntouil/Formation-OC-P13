import React from 'react'
import propTypes from 'prop-types'

/**
 * Display hero
 * @param {string} srTitle
 * @component
 */
export default function Hero({ srTitle, children }) {
    return (
        <div className="hero">
            <section className="hero-content">
                {srTitle && <h2 className="sr-only">{srTitle}</h2>}
                {children}
            </section>
        </div>
    )
}
// Props types
Hero.propTypes = {
    srTitle: propTypes.string,
}