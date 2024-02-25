

import { FC } from 'react';
import styles from './Notification.module.scss';
import {NotifyProps} from "@/helpers/types/MyTypes";


const Notification: FC<NotifyProps> = ({type, id, message}) => {
    let notifyTypeStyles: string | undefined;

    switch (type){
        case 'success':
            notifyTypeStyles = styles.notifySuccess;
            break;
        case 'failure':
            notifyTypeStyles = styles.notifyFailure;
            break;
        case 'warning':
            notifyTypeStyles = styles.notifyWarning;
            break;
    }

    return (
        <div className={`${styles.notify} ${notifyTypeStyles}`}
             role={'alert'}
        >
            <p>{message}</p>
        </div>
    )
}

export default Notification;