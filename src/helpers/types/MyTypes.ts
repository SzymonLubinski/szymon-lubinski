import {ReactNode} from "react";
import {StaticImageData} from "next/image";
import {Dayjs} from "dayjs";


export interface TabBtnTypes{
    tabText: string;
    icon: ReactNode
}
export interface initialTabsTypes{
    tab: string;
}


export interface initialPortalTypes{
    active: boolean;
    portalData: ProjectType | HandmadeItemType | null;
    type: 'Project' | 'HandmadeItem' | 'HandmadeNav' | null;
}

export interface ProjectType{
    id: string;
    name: string;
    line1: string;
    line2: string;
    img: StaticImageData;
    link: string;
}



export interface onCloseType{
    onClose: () => void;
}
export interface onShowType{
    onShow?: (which: string) => void;
}
export interface ModalType {
    children: ReactNode;
    portalType: 'modalSlideDown' | 'modalFullScreen';
}
export interface BackdropType extends onCloseType, onShowType{

}
export interface PortalTypes extends BackdropType, ModalType {

}

export interface HandmadeItemType{
    id: string;
    name: string;
    images: StaticImageData[];
    description: string;
    price: number;
}

export interface HandMadeTabType{
    link: string;
    plTitle: string;
}
export interface HandMadeTabTypeWithNode extends HandMadeTabType{
    node: ReactNode;
}
export interface HandMadeOpinionType{
    nick: string;
    text: string;
    rate: 1 | 2 | 3 | 4 | 5;
}
export interface BlogPostType{
    id: number,
    title: string;
    date: Dayjs;
    text: string;
    image: StaticImageData;
}

export interface NotifyItem{
    message: string;
    type: 'success' | 'failure' | 'warning';
}
export interface NotifyProps extends NotifyItem{
    id: number;
}