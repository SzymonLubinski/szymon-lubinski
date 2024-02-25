'use client'

import {FC, useEffect, useState} from 'react';
import styles from "@/components/CV/Welcome.module.css";
import About from "@/components/CV/About";
import Projects from "@/components/CV/Projects";
import Tech from "@/components/CV/Tech";
import Cooperation from "@/components/CV/Cooperation";
import {useAppSelector} from "@/store/hooks";
import Nav from "@/components/CV/Nav";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import ProjectPreview from "@/components/Portal/ProjectPreview";
import {ProjectType} from "@/helpers/types/MyTypes";


interface WelcomeProps{}


const Welcome: FC<WelcomeProps> = ({}) => {
    const tab = useSelector((state: RootState) => state.tab.tab);
    const BTNAction = useAppSelector(state => state.tab)
    const [openPanel, setOpenPanel] = useState<boolean>(false);
    const panelStyles = openPanel ? styles.panel : `${styles.panel} ${styles.hidePanel}`;
    const portal = useSelector((state: RootState) => state.portal);
    const currentProject = portal.portalData as ProjectType;

    useEffect(() => {
        setOpenPanel(false);
    }, [tab]);

    return (
        <div className={styles.general}>
            <div className={panelStyles}>
                <Nav/>
                <div className={styles.mobile}>
                    <button className={styles.mobileBtn} onClick={() => setOpenPanel(!openPanel)}>
                        {openPanel ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        )}
                    </button>
                </div>
            </div>

            <main className={styles.main}>
                <div className={styles.contactMobile}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                         viewBox="0 0 48 48">
                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                        <polygon fill="#e53935"
                                 points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
                        <path fill="#c62828"
                              d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
                        <path fill="#fbc02d"
                              d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg>
                    <p>szymon.lubinski.it@gmail.com</p>
                </div>
                {BTNAction.tab === 'About me' && <About/>}
                {BTNAction.tab === 'My projects' && <Projects/>}
                {BTNAction.tab === 'Technologies' && <Tech/>}
                {BTNAction.tab === 'Cooperation' && <Cooperation/>}
            </main>
            {portal.active && portal.type === 'Project' && (
                <ProjectPreview project={currentProject}/>
            )}
        </div>

    )
}

export default Welcome;