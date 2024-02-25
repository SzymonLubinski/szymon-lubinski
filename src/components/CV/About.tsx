'use client'

import styles from './About.module.css';

import portrait from '../../../public/img/new_profile1.jpg';
import Image from "next/image";

export default function About () {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <section>
                    <div className={styles.hiContainer}>
                        <h3>Hey! This is</h3>
                        <h1>Szymon Lubiński</h1>
                        <h4>Web Developer</h4>
                        <div className={styles.gmail}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                            </svg>
                            <p>szymon.lubinski.it@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={portrait} alt={'my profile'}/>
                    </div>
                </section>
                <section className={styles.services}>
                    <div className={styles.servicesItem}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} height="16" width="20" viewBox="0 0 640 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z"/></svg>
                        </div>
                        <p>Flexible Dates</p>
                    </div>
                    <div className={styles.servicesItem}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} height="16" width="16" viewBox="0 0 512 512"><path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                        </div>
                        <p>Creative Designs</p>
                    </div>
                    <div className={styles.servicesItem}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} height="16" width="20" viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/></svg>
                        </div>
                        <p>Easy Communication</p>
                    </div>
                    <div className={styles.servicesItem}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </div>
                        <p>Attention To Detail</p>
                    </div>
                </section>
                <section>
                    <div className={styles.about}>
                        <h3>About me</h3>
                        <p>
                            I am a junior web developer and an IT enthusiast.
                            I create simple and moderately advanced websites and applications.
                            Write to me by email and describe what kind of website you need and I will provide you with the details!
                        </p>
                        <h3>Examples</h3>
                        <p>
                            You can see my sample works in the 'My Projects' section.
                        </p>
                        <h3>Cooperation</h3>
                        <p>
                            If you are interested in another form of cooperation, please visit the 'Cooperation' tab.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

//
// <div className={styles.circle}>
//     <section>One</section>
//     <section>Two</section>
//     <section>Tree</section>
//     <section>Four</section>
//     <section>Five</section>
//     <section>Six</section>
// </div>
// <h1>Hi I'm Simon!</h1>
// <section>
//     <h1>About me</h1>
//     <p>I'm 24 years old, and I am graduate University of Rzeszow. The IT industry is the most interesting
//         for me because in my opinion a programmer is like an artist.
//     </p>
//     <p>I'm come from south Poland. To be precise, from the village of Kielczawa located in the Bieszczady
//         Mountains in Subcarpathia.
//     </p>
//     <p>
//         I currently live in Rzeszow.
//     </p>
// </section>
// <section>
//     <h1>Skills</h1>
//     <p>I enjoy creating websites and writing applications. Every day after work I learn new technologies
//         and I believe that the most valuable knowledge is for free.
//         All you need is the time and willingness to learn.
//     </p>
//     <p>More about my skills in "My projects" and "Technologies" section</p>
// </section>