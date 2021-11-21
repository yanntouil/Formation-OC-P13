import React from 'react'
import propTypes from 'prop-types'

/**
 * Icon
 * @component
 * @param {Object} props
 * @param {String} props.name
 */
export default function Icon({name}) {
    return (
        <i className={'fa fa-' + name} />
    )
}
// Props types
Icon.propTypes = {
    name: propTypes.string.isRequired,
}