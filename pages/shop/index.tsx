import { templateProducts } from "@/database/products";
import { Page } from "@/layouts/Page";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
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
                {templateProducts.map(product => (
                    <Tile key={product.id} {...product} />
                ))}
            </Page>
        </>
    )
}

export default Shop;