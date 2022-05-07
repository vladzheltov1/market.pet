import { Product } from "@/types/products";
import { FC } from "react";
import shopStyles from "./Shop.module.scss";

export const Tile: FC<Product> = (props) => {
    const product = props as Product;
    return (
        <div className={shopStyles.product_tile}>
            {product.title}
        </div>
    )
}