import { PRODUCT_NO_IMAGE } from "@/constants/paths";
import { CURRENCY } from "@/constants/symbols";
import { Product } from "@/types/products";
import { addSpacesToPrice } from "@/utils/adapters";
import Image from "next/image";
import { FC } from "react";
import shopStyles from "./Shop.module.scss";

export const Tile: FC<Product> = (props) => {
    const product = props as Product;

    const photo = product.photos[0] ? product.photos[0] : PRODUCT_NO_IMAGE;

    return (
        <div className={shopStyles.product_tile}>
            <div className={shopStyles.product_tile__picture}>
                <Image src={photo} layout="fill" alt="" />
            </div>
            <div className={shopStyles.product_tile__bottom}>
                <div className={shopStyles.product_tile__price}>{addSpacesToPrice(product.price.value)} {CURRENCY[product.price.currency]}</div>
                <div className={shopStyles.product_tile__title}>{product.title}</div>
            </div>
        </div>
    )
}