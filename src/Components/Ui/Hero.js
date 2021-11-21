import React from 'react'

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
