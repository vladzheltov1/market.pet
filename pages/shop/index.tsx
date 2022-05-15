import { PageHead } from "@/components/PageHead";
import { templateProducts } from "@/database/tables/products";
import { Page } from "@/layouts/Page";
import { Product } from "@/types/products";
import { filterList } from "@/utils/search";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import shopStyles from "./Shop.module.scss";
import { Tile } from "./Tile";

const Shop: FC = () => {
    const [products, setProducts] = useState<Array<Product> | null>(null); 

    const router = useRouter();

    useEffect(() => {
        const query = router.query;

        const filteredProducts = filterList<Product>(templateProducts, ((query as any) as keyof Product));

        setProducts(filteredProducts.length !== 0 ? filteredProducts : templateProducts);
    }, [router.query])

    return (
        <> 
            {products && (
                <>
                    <PageHead title="Магазин" />
                    <Page>
                        <div className={shopStyles.tile_wrapper}>
                            {products.map(product => (
                                <Link href={`/product?id=${product.id}`} key={product.id}>
                                    <a>
                                        <Tile key={product.id} {...product} />
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </Page>
                </>
            )}
        </>
    )
}

export default Shop;