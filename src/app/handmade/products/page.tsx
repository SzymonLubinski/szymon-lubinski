import { FC } from 'react';
import Products from "@/components/handmade/Products";

interface PageProps{}

const Page: FC<PageProps> = ({}) => {
    return (
        <div>
            <Products/>
        </div>
    )
}

export default Page;