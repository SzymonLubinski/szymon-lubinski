import {Portal} from "./Portal";
import {ProjectType} from "@/helpers/types/MyTypes";
import {useDispatch} from "react-redux";
import {turnOffPortal} from "@/store/portal-slice";
import styles from './ProjectPreview.module.css';
import Image from "next/image";

interface ProjectPreviewProps{
    project: ProjectType
}

export default function ProjectPreview(props: ProjectPreviewProps){
    const dispatch = useDispatch();

    return (
        <Portal onClose={() => dispatch(turnOffPortal())}
                portalType={'modalSlideDown'}
        >
            <div className={styles.container}>
                <div className={styles.close} onClick={() => dispatch(turnOffPortal())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <h1>{props.project.name}</h1>
                <Image src={props.project.img} alt={`preview: ${props.project.name}`}/>
                <p>{props.project.line1}</p>
                <p>{props.project.line2}</p>
            </div>
        </Portal>
    )
}