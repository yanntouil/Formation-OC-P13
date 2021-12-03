import React from 'react'

/**
 * Display hero text
 * @component
 */
 export default function HeroText({ children }) {
    return (
        <p className="hero-content-text">{children}</p>
    )
}
