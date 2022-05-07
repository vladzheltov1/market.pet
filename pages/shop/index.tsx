import { templateProducts } from "@/database/products";
import { Page } from "@/layouts/Page";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import shopStyles from "./Shop.module.scss";
import { Tile } from "./Tile";

const Shop: FC = () => {
    const [products, setProducts] = useState(templateProducts); 

    const router = useRouter();

    useEffect(() => {
        console.log(router.query)
    }, [])

    return (
        <> 
            <Head>
                <title>Магазин — Market.pet</title>
            </Head>
            <Page>
                <div className={shopStyles.tile_wrapper}>
                    {templateProducts.map(product => (
                        <Link href={`/product?id=${product.id}`} key={product.id}>
                            <a>
                                <Tile key={product.id} {...product} />
                            </a>
                        </Link>
                    ))}
                </div>
            </Page>
        </>
    )
}

export default Shop;