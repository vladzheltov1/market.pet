import { Page } from "@/layouts/Page";
import { Product } from "@/types/products";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Product: FC = () => {    
    const [product, setProduct] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const productId = router.query["id"];

        if(!productId){
            router.push("/shop");
            return;
        }
    }, [])

    useEffect(() => {
        console.log(product);
    }, [product])

    return (
        <>  
            <Head>
                <title></title>
            </Head>
            <Page>
                Test 
            </Page>
        </>
    )
}

export default Product;