'use client'

import styles from './Projects.module.css';
import {useDispatch} from "react-redux";
import {staticData} from "@/helpers/utils/static-data";
import {setPortalOnProject} from "@/store/portal-slice";
import Image from "next/image";


export default function Projects() {
    const dispatch = useDispatch();

    return (
        <div className={styles.main}>
            <div className={styles.projects}>
                {staticData.map((project) => (
                        <div key={project.id} className={styles.project}>
                            <Image src={project.img} alt={`project: ${project.name}`}/>
                            <div className={styles.projectInfo}>
                                <h1>{project.name}</h1>
                                <p>{project.line1}</p>
                                <div className={styles.projectLinks}>
                                    <button onClick={() => dispatch(setPortalOnProject(project))}>
                                        <span>Read more</span>
                                        <div className={styles.projectSVG}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                        </div>
                                    </button>
                                    <a href={project.link} target={'_blank'} rel="noreferrer" className={styles.projectSVG}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} height="16" width="20" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}
