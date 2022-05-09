import { Product } from "@/types/products";
import Image from "next/image";
import { FC } from "react";
import shopStyles from "./Shop.module.scss";

export const Tile: FC<Product> = (props) => {
    const product = props as Product;
    return (
        <div className={shopStyles.product_tile}>
            <div className={shopStyles.product_tile__title}>{product.title}</div>
            <div className={shopStyles.product_tile__picture}><Image src={product.photos[0]} layout="fill" alt="" /></div>
        </div>
    )
}