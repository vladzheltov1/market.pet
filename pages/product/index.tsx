import { PageHead } from "@/components/PageHead";
import { select } from "@/database/api";
import { Page } from "@/layouts/Page";
import { Product } from "@/types/products";
import { redirect } from "@/utils/redirect";
import { isEmptyArray } from "@/validators/array";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const ProductPage: FC = () => {
    const [product, setProduct] = useState<Product | null>(null);

    const router = useRouter();

    useEffect(() => {
        const queryId = router.query["id"];
        const productId = Array.isArray(queryId) ? queryId[0] : queryId; 

        if(!productId){
            redirect("/shop", router);
            return;
        }
        
        const productsByQuery = select("PRODUCTS", {id: parseInt(productId)}) as Product[];
    
        if(isEmptyArray(productsByQuery)){
            redirect("/shop", router);
            return;
        }

        setProduct(productsByQuery[0]);
    }, [])

    return (
        <>  
            {product && (
                <>
                    <PageHead title={product.title}/>
                    <Page>
                        {product.title}
                    </Page>
                </>
            )}
        </>
    )
}

export default ProductPage;