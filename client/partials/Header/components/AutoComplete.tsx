import { AutoCompleteItem, Match } from "@/shared/types/autoComplete";
import { getAutoCompleteList } from "@/utils/autoComplete";
import { assembleLink } from "@/utils/redirect";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import headerStyles from "../Header.module.scss";

export interface IAutoCompleteProps {
    fieldValue: string
}

export const AutoComplete: FC<IAutoCompleteProps> = (props) => {
    const {fieldValue} = props as IAutoCompleteProps;

    const [autoCompleteList, setAutoCompleteList] = useState<Array<AutoCompleteItem>>([]);

    useEffect(() => {
        if(fieldValue.length >= 3){
            setAutoCompleteList(getAutoCompleteList(fieldValue));
        }
        if(fieldValue.length === 0){
            setAutoCompleteList([]);
        }
    }, [fieldValue]);

    const shouldComponentRender = (): boolean => autoCompleteList.length !== 0 && fieldValue.length !== 0;

    return (
        <>{shouldComponentRender() && (
            <div className={headerStyles.header__search__auto_complete_container}>
                {autoCompleteList.map((item, idx) => (
                    <div key={idx}>
                        {item.match === Match.part && typeof item.value !== "string" && (
                            <Link href={assembleLink("/shop", {id: item.value.id})}>
                                <a className={`${headerStyles.header__search__auto_complete_link} ${headerStyles.direct_link}`}>
                                    {item.value.title}
                                </a>
                            </Link>
                        )}
                        {typeof item.value === "string" && (
                            <Link href={assembleLink("/search", {query: item.value})}>
                                <a className={`${headerStyles.header__search__auto_complete_link}`}>
                                    {item.value}
                                </a>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        )}</>
    )
}