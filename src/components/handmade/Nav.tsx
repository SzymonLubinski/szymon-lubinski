'use client'

import {FC, useEffect, useState} from 'react';
import {handmadeTabs} from "@/helpers/utils/static-data";
import styles from './Nav.module.scss';
import Image from "next/image";
import logo from '../../../public/img/handmade/handmade-logo.png'
import Link from "next/link";
import MobileHandmadeNav from "@/components/Portal/MobileHandmadeNav";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setPortalOnHandmadeNav} from "@/store/portal-slice";


const Nav: FC = ({}) => {
    const portal = useSelector((state: RootState) => state.portal);
    const dispatch = useDispatch();
    const [firstTab] = handmadeTabs.slice(0);
    const fromSecondToLast = handmadeTabs.slice(1);
    const [screenOnTop, setScreenOnTop] = useState<boolean>(true);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.scrollY > 0 && screenOnTop) {
                setScreenOnTop(false);
            }
            if (window.scrollY === 0) {
                setScreenOnTop(true);
            }
        }
        window.addEventListener('scroll', handleWindowResize);
    }, [screenOnTop]);

    const navStyles = screenOnTop ? styles.nav : `${styles.nav} ${styles.nav__scrolled}`;

    return (
        <div className={navStyles}>
            <div className={styles.center}>
                <Link href={firstTab.link} className={styles.nav__logo}>
                    <Image src={logo} priority={true} alt={'tulipanowo-logo'}/>
                    <h1>{firstTab.title}</h1>
                </Link>
                <div className={styles.nav__tabs}>
                    {fromSecondToLast.map((tab, i) => (
                        <Link href={tab.link} key={i} className={styles.tab}>
                            <h1>{tab.title}</h1>
                        </Link>
                    ))}
                </div>

                <div className={styles.nav__mobileTab}>
                    <div className={styles.nav__bar}
                         onClick={() => dispatch(setPortalOnHandmadeNav())}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </div>
                    {portal.active && portal.type === 'HandmadeNav' && (
                        <MobileHandmadeNav/>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Nav;