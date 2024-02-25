import {handmadeData} from "@/helpers/utils/static-data";

export const getItem = (id: string) => {
    console.log('id:', id)
    const [a] = handmadeData.filter((item) => item.id === id);
    return a;
}