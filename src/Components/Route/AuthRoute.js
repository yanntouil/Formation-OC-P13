import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { authSelector } from '../../redux/auth/authSelectors'

/**
 * Redirect user on authenticated state
 * @component
 * @param {Object} props
 * @param {Element} props.element Element to show when comparison work
 * @param {String} props.redirectTo Redirection address when comparison fail
 * @param {Boolean} props.authenticated Authenticated state to compare
 */
export default function AuthRoute({ element, redirectTo = '/', authenticated = true }) {
    const {isAuthenticated} = useSelector(authSelector)
    const location = useLocation()
    if (!(isAuthenticated === authenticated)) 
        return <Navigate to={redirectTo} state={{ from: location }} />;
    return element;
}
// Props types
AuthRoute.propTypes = {
    element: propTypes.element.isRequired,
    redirectTo: propTypes.string,
    authenticated: propTypes.bool,
}