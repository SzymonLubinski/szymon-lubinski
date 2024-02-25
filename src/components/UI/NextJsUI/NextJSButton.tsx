

import { FC } from 'react';
import styles from './NextJSButton.module.scss';
import Link from "next/link";

interface NextJSButtonProps{
    content: string;
    link?: string;
}

const NextJSButton: FC<NextJSButtonProps> = ({content, link}) => {
    if (link){
        return (
            <div className={styles.btn}>
                <Link href={link}>
                    <span>
                        {content}
                    </span>
                </Link>
            </div>
        )
    }


    return (
        <div>NextJSButton</div>
    )
}

export default NextJSButton;