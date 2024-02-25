import React, {useRef} from "react";
import {createPortal} from 'react-dom';
import styles from './Portal.module.css'
import {BackdropType, ModalType, PortalTypes} from "@/helpers/types/MyTypes";

const Backdrop = (props: BackdropType) => {
    return (
        <div className={styles.backdrop} onClick={props.onClose}>

        </div>
    )
}
const ModalOverlay = (props: ModalType) => {
    // props.portalType specifies the style of the portal
    let modalStyles;
    switch (props.portalType){
        case "modalFullScreen":
            modalStyles = styles.modalFullScreen;
            break;
        case "modalSlideDown":
            modalStyles = styles.modalSlideDown;
            break;
    }

    return (
        <div className={modalStyles}>
            <div>{props.children}</div>
        </div>
    )
};

export const Portal = (props: PortalTypes) => {
    const ref = useRef<Element | null>(null);

    ref.current = document.querySelector<HTMLElement>("#portal");

    return (
        <div>
            {ref.current && createPortal(
                <Backdrop onClose={props.onClose}/>,
                ref.current)}
            {ref.current && createPortal(
                <ModalOverlay portalType={props.portalType}>
                    {props.children}
                </ModalOverlay>,
                ref.current)}
        </div>
    )
}
