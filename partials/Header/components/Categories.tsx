import { category_ru } from "@/dictionary/categories";
import { assembleLink } from "@/utils/redirect";
import Link from "next/link";
import { FC } from "react";

export const HeaderCategories: FC = () => {
    return <>
        <Link href={"/shop"}><a>Все категории</a></Link>|
        {Object.keys(category_ru).map(key => (
            <Link href={assembleLink("/shop", {category: key})} key={key}><a>{category_ru[key as keyof typeof category_ru]}</a></Link>
        ))}
    </>
}