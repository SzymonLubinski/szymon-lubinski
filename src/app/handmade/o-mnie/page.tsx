import {FC} from 'react';
import Image from "next/image";
import aboutImg from '../../../../public/img/handmade/about.png';
import styles from './page.module.scss';


interface PageProps {
}

const Page: FC<PageProps> = ({}) => {
    return (
        <div className={styles.container}>
            <Image src={aboutImg} alt={'about'}/>
            <div className={styles.container__text}>
                <h1>Tulipanowo</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non porta nisl. Nulla a tempor eros.
                    Proin rutrum luctus enim a malesuada. Fusce et nunc orci. Mauris libero dolor, consequat non augue
                    sit amet, venenatis facilisis quam. Fusce cursus suscipit pellentesque. Duis id justo sed nibh
                    posuere accumsan. Vestibulum finibus mollis mollis. Mauris augue leo, scelerisque vel turpis eget,
                    lobortis bibendum dolor. Mauris imperdiet tincidunt lorem vitae efficitur. Quisque nec velit
                    dignissim, cursus eros non, auctor tortor. Cras finibus nunc eget ex fringilla, et finibus est
                    dignissim. Nulla sapien diam, eleifend non tortor non, lacinia ultricies velit. Sed vel lectus
                    dignissim, mollis tellus in, eleifend risus. Quisque tincidunt diam eget semper efficitur. Nullam
                    iaculis felis vitae ligula feugiat, ac ultrices enim facilisis.
                </p>
            </div>
        </div>
    )
}

export default Page;