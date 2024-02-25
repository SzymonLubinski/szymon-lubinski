'use client'

import VanillaTilt from "vanilla-tilt";
import {useEffect, useRef} from "react";


export default function TiltObj (props: any) {
    const {options, ...rest} = props;
    const ref = useRef(null);

    useEffect(() => {
        const div: HTMLDivElement | null = ref.current;
        if (div !== null){
            VanillaTilt.init(div, options);
        }
    }, [options, props]);

    return <div ref={ref} {...rest}/>;
}