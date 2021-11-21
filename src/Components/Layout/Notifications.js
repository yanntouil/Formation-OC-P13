import React from 'react'
import { useSelector } from 'react-redux'
import { notificationsSelector } from '../../redux/notifications/notificationsSelectors'
import { removeNotificationAction } from '../../redux/notifications/notificationActions'
import Toast from '../Ui/Toast'

/**
 * Notifications
 * Show notifications from state
 * @component
 */
export default function Notifications() {
    const {notifications} = useSelector(notificationsSelector)

    return notifications ? (
        <div className="toasts">
            {notifications.map((notification) => (
                <Toast 
                    key={notification.id} 
                    toast={notification} 
                    clear={removeNotificationAction} 
                    timeout={3000} 
                />
            ))}
        </div>
    ) : (<></>)
}
