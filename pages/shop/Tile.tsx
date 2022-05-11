import { PRODUCT_NO_IMAGE } from "@/constants/paths";
import { Product } from "@/types/products";
import Image from "next/image";
import { FC } from "react";
import shopStyles from "./Shop.module.scss";

export const Tile: FC<Product> = (props) => {
    const product = props as Product;

    const photo = product.photos[0] ? product.photos[0] : PRODUCT_NO_IMAGE;

    return (
        <div className={shopStyles.product_tile}>
            <div className={shopStyles.product_tile__title}>{product.title}</div>
            <div className={shopStyles.product_tile__picture}><Image src={photo} layout="fill" alt="" /></div>
        </div>
    )
}