import { PageHead } from "@/components/PageHead";
import { templateProducts } from "@/database/products";
import { Page } from "@/layouts/Page";
import { Product } from "@/types/products";
import { redirect } from "@/utils/redirect";
import { findOne } from "@/utils/search";
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
        
        const productByQuery = findOne<Product>(templateProducts, {id: parseInt(productId)});
        
        if(!productByQuery){
            redirect("/shop", router);
        }

        setProduct(productByQuery);
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