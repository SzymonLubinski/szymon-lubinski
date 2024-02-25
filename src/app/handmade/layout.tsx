

import {FC, ReactNode} from 'react';
import styles from './layout.module.scss';
import Nav from "@/components/handmade/Nav";
import Footer from "@/components/handmade/Footer";


interface HandmadeLayoutProps{
    children: ReactNode;
}

const HandmadeLayout: FC<HandmadeLayoutProps> = ({children}) => {

    return (
        <div className={styles.container}>
            <Nav/>
            <main className={styles.center}>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
            <footer className={styles.container__footer}>
                <div className={styles.center}>
                   <Footer/>
                </div>
            </footer>
        </div>
    )
}

export default HandmadeLayout;