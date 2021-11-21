import axios from "axios"
import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_USER, AUTH_UPDATE_USER } from "../actionsTypes"
import { notificationSend } from '../notifications/notificationActions'
import setAuthorizationToken from "../../utils/setAuthorizationToken"

/**
 * Logout
 * @returns {Function} 
 */
export const authLogout = () => async dispatch => {
    localStorage.removeItem('token')
    dispatch(notificationSend({ icon: "unlink", type: "success", message: "You are disconnected" }))// Notif
    dispatch({ type: AUTH_LOGOUT })
}

/**
 * Login
 * @param {object} credentials
 * @param {String} credentials.email
 * @param {String} credentials.password
 * @param {Boolean} credentials.remember
 * @returns {Function} 
 */
export const authLogin = credentials => async dispatch => {
    try {
        dispatch({ type: AUTH_LOADING, payload: true })// Start request
        // Check credentials and get jwt
        const responseLogin = await axios.post('/user/login', credentials)
        const token = responseLogin.data.body.token
        // Remember is checked
        if (credentials.remember) localStorage.setItem('token', token)
        else localStorage.removeItem('token')
        // Set Axios token
        setAuthorizationToken(token)
        dispatch({ type: AUTH_LOADING, payload: false })// End request
        dispatch(notificationSend({ icon: "link", type: "success", message: "You are connected" }))// Notif
        dispatch({ type: AUTH_LOGIN, payload: {token} })
        const responseProfile = await axios.post('/user/profile')
        const user = responseProfile.data.body
        dispatch({ type: AUTH_SET_USER, payload: {user} })
    } catch(error) {console.log(error)
        dispatch({ type: AUTH_LOADING, payload: false })// End request
        if(error.response.status >= 500)// Error 500
            return dispatch(notificationSend({ icon: "exclamation-triangle", type: "danger", message: "Server error retry later" }))
        if(error.response.status > 400)// Error 400
            return dispatch(notificationSend({ icon: "exclamation-triangle", type: "danger", message: "Server connection lost" }))
        if(error.response.status === 400)// Error 400
            return dispatch(notificationSend({ icon: "exclamation-triangle", type: "danger", message: "Invalid Email or password" }))
    }
}

/**
 * Auto login
 * @param {String} token
 * @returns {Function} 
 */
export const authAutoLogin = token => async dispatch => {
    try {
        setAuthorizationToken(token)
        dispatch({ type: AUTH_LOGIN, payload: {token} })
        const response = await axios.post('/user/profile')
        const user = response.data.body
        dispatch({ type: AUTH_SET_USER, payload: {user} })
    } catch(error) {
        if(error.response.status >= 500)// Error 500
            return dispatch(notificationSend({ icon: "exclamation-triangle", type: "danger", message: "Server error retry later" }))
        if(error.response.status >= 400)// Error 400
            return dispatch(notificationSend({ icon: "exclamation-triangle", type: "danger", message: "Server connection lost" }))
    }
}

/**
 * Update profile information
 * @param {object} formData
 * @param {String} formData.firstName
 * @param {String} formData.lastName
 * @returns {Function} 
 */
export const authUpdateProfile = formData => async dispatch => {
    try {
        const response = await axios.put('/user/profile', formData)
        const user = response.data.body
        dispatch({ type: AUTH_UPDATE_USER, payload: {user} })
        dispatch(notificationSend({ icon: "address-card", type: "success", message: response.data.message }))// Notif
    } catch (error) {
        if(error.response.status >= 500)// Error 500
            return dispatch(notificationSend({ icon: "exclamation-triangle", type: "danger", message: "Server error retry later" }))
        if(error.response.status >= 400)// Error 400
            return dispatch(notificationSend({ icon: "exclamation-triangle", type: "danger", message: "Server connection lost" }))
    }
}



