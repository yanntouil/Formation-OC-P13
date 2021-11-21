import { NOTIFICATIONS_SEND, NOTIFICATION_CLEAR } from "../actionsTypes"



/**
 * Send a notification
 * @param {Object} notification
 * @returns {Object}
 */
export const notificationSend = (notification) => {
    return { type: NOTIFICATIONS_SEND, payload: notification }
}

/**
 * Clear a notification
 * @param {Object} notification
 * @returns {Object}
 */
export const removeNotificationAction = (notification) => {
    return { type: NOTIFICATION_CLEAR, payload: notification }
}