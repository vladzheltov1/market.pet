import { Page } from "@/layouts/Page";
import { Product } from "@/types/products";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const ProductPage: FC = () => {
    const [product, setProduct] = useState<Product | null>(null);

    const router = useRouter();

    useEffect(() => {
        const productId = router.query["id"];

        if(!productId){
            router.push("/shop");
            return;
        }
    }, [])

    return (
        <>  
            <Head>
                <title>{}</title>
            </Head>
            <Page>
                Test 
            </Page>
        </>
    )
}

export default ProductPage;