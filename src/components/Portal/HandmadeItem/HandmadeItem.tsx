'use client'

import {FC} from 'react';
import React, {useState} from 'react';

import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';


import styles from './HandmadeItem.module.scss';
import {HandmadeItemType} from "@/helpers/types/MyTypes";
import {Portal} from "@/components/Portal/Portal";
import {useDispatch} from "react-redux";
import {turnOffPortal} from "@/store/portal-slice";


interface HandmadeItemProps {
    item: HandmadeItemType;
}

const HandmadeItem: FC<HandmadeItemProps> = ({item}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const dispatch = useDispatch();

    return (
        <Portal onClose={() => dispatch(turnOffPortal())}
                portalType={'modalFullScreen'}
        >
            <div className={styles.itemPreview}>
                <div className={styles.itemPreview__close}
                     onClick={() => dispatch(turnOffPortal())}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div className={styles.itemPreview__swiper}>
                    <Swiper
                        style={{
                            // @ts-ignore
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{swiper: thumbsSwiper}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {item.images.map((image, i) => (
                            <SwiperSlide key={i}>
                                <Image src={image} alt={'desc'}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        // @ts-ignore
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {item.images.map((image, i) => (
                            <SwiperSlide key={i}>
                                <Image src={image} alt={'desc'}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
        </Portal>
    )
}

export default HandmadeItem;