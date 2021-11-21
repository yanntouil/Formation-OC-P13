import React from 'react'

export default function FeaturesItem({ picture, pictureAlt, children }) {
    return (
        <div className="features-item">
            <img src={picture} alt={pictureAlt || ''} className="features-item-image" />
            {children}
        </div>
    )
}
