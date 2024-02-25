'use client'

import {FC, useEffect} from 'react';
import styles from './Products.module.scss';
import {handmadeData} from "@/helpers/utils/static-data";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import HandmadeItem from "@/components/Portal/HandmadeItem/HandmadeItem";
import {HandmadeItemType} from "@/helpers/types/MyTypes";
import {setPortalOnHandmadeItem} from "@/store/portal-slice";


const Products: FC = ({}) => {
    const portal = useSelector((state: RootState) => state.portal);
    const currentItem = portal.portalData as HandmadeItemType;
    const dispatch = useDispatch();

    useEffect(() => {
        if (portal.active){
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }
    }, [portal.active]);

    return (
        <div className={styles.productsContainer}>
            <div className={styles.productsContainer__gallery}>
                {handmadeData.map((item) => (
                    <div key={item.id}
                         className={styles.item}
                         onClick={() => dispatch(setPortalOnHandmadeItem(item))}
                    >
                        <Image src={item.images[0]} alt={'front'}/>
                        <div className={styles.item__overlay}>
                            <div className={styles.item__overlay__left}>
                                <span>{item.name}</span>
                            </div>
                            <div className={styles.item__overlay__right}>
                                <span>{item.price} zł</span>
                            </div>
                        </div>
                        <div className={styles.item__magnifier}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </div>
                    </div>
                ))}
            </div>
            {portal.active && portal.type === 'HandmadeItem' && (
                <HandmadeItem item={currentItem}/>
            )}
        </div>
    )
}

export default Products;