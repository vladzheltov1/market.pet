import { category_ru } from "@/translate/categories";
import { assembleSearchLink } from "@/utils/search";
import Link from "next/link";
import { FC } from "react";


/**
 * @TODO fix type misunderstanding: Object.keys(category_ru) will definitely return array of categories,
 * but now the system does not understand that fact. Maybe there's some kind of unclear behaviour of that method?
 */
export const HeaderCategories: FC = () => {
    return <>
        {Object.keys(category_ru).map(key => (
            <Link href={assembleSearchLink({title: "", category: key})} key={key}><a>{category_ru[key]}</a></Link>
        ))}
    </>
}