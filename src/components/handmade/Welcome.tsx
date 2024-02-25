'use client'

import {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './swiper-styles.css';


import Image from "next/image";
import background from "../../../public/img/handmade/bg.png";
import styles from './Welcome.module.scss'
import welcomePicture from  "../../../public/img/handmade/about.png";
import {handmadeData, handmadeOpinions} from "@/helpers/utils/static-data";
import NextJSButton from "@/components/UI/NextJsUI/NextJSButton";


interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {

    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__background}>
                <Image src={background} alt={'background'}/>
            </div>
            <div className={styles.welcome__content}>
                <section className={styles.welcomeSection}>
                    <Image src={welcomePicture} alt={'welcome on website'}/>
                    <div className={styles.welcomeSection__info}>
                        <h1>Lorem ipsum</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, scelerisque et
                            condimentum non, interdum non dolor. Sed quis odio ultricies, hendrerit est quis, vulputate
                            nulla. Nulla vel quam et velit hendrerit posuere.
                        </p>
                    </div>
                </section>
                <section className={styles.productsSection}>
                    <div className={styles.productsSection__gallery}>
                        {handmadeData.slice(3).map((item) => (
                            <Image key={item.id} src={item.images[0]} alt={'zoba'}/>
                        ))}
                    </div>
                    <div className={styles.productsSection__backdrop}>
                        <NextJSButton content={'Zobacz więcej'}
                                      link={'/handmade/produkty'}
                        />
                    </div>
                </section>
                <section className={styles.opinionsSection}>
                    <div className={styles.opinionsSection__title}>
                        <p>Wasze opinie</p>
                    </div>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 1,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                    >
                        {handmadeOpinions.map((opinion, i) => (
                            <SwiperSlide key={i}>
                                <div className={styles.opinionsSection__opinion}>
                                    <h1>{opinion.nick}</h1>
                                    <div className={styles.opinionsSection__stars}>
                                        {[...Array(opinion.rate)].map((item, i) => (
                                            <div key={i}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                            </div>
                                        )) }
                                    </div>
                                    <p>{opinion.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>
        </div>
    )
}

export default Welcome;