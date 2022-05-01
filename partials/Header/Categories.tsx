import { category_ru } from "@/translate/categories";
import { assembleSearchLink } from "@/utils/search";
import Link from "next/link";
import { FC } from "react";

export const HeaderCategories: FC = () => {
    return <>
        {Object.keys(category_ru).map(key => (
            <Link href={assembleSearchLink({title: "", category: key})} key={key}><a>{category_ru[key]}</a></Link>
        ))}
    </>
}