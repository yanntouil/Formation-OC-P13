import React from 'react'

export default function Features({ srTitle, children }) {
    return (
        <section className="features">
            {srTitle && <h2 className="sr-only">{srTitle}</h2>}
            <div className="features-grid">
                {children}
            </div>
        </section>
    )
}
