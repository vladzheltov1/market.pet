import { category_ru } from "@/translate/categories";
import { assembleShopSearchLink } from "@/utils/search";
import Link from "next/link";
import { FC } from "react";

export const HeaderCategories: FC = () => {
    return <>
        {Object.keys(category_ru).map(key => (
            <Link href={assembleShopSearchLink({category: key})} key={key}><a>{category_ru[key]}</a></Link>
        ))}
    </>
}