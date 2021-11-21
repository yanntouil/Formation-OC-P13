import React, { useCallback, useEffect } from 'react'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Icon from './Icon'


/**
 * Toast
 * @component 
 * @param {Object} props
 * @param {Object} props.toast Toast informations
 * @param {Function} props.clear Call to clear toast
 * @param {Number} props.timeout Time before to clear toast
 */
export default function Toast({toast, clear, timeout}) {
    const dispatch = useDispatch()

    const clearToast = useCallback(() => {
        if (clear) dispatch(clear(toast))
    }, [dispatch, clear, toast])

    useEffect(() => {
        const hideTimer = timeout ? setTimeout(clearToast, timeout) : false
        return () => {
            if(hideTimer) clearTimeout(hideTimer)
        }
    }, [clearToast, timeout])

    return (
        <div className={`toast ${toast.type}`} onClick={clearToast}>
            {toast.icon && (
                <div className="toast-icon">
                    <Icon name={toast.icon}/>
                </div>
            )}
            <div className="content">
                {toast.title && <div className="toast-title">{toast.title}</div>}
                {toast.message && <div className="toast-message">{toast.message}</div>}
            </div>
        </div>
    )
}
// Props types
Toast.propTypes = {
    toast: propTypes.object.isRequired,
    clear: propTypes.func,
    timeout: propTypes.number,
}