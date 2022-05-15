import Link from "next/link";
import { FC } from "react";
import headerStyles from "../Header.module.scss";

export const HeaderBrand: FC = () => {
    return (
        <h2 className={headerStyles.header__brand}><Link href="/shop"><a>Market.pet</a></Link></h2>
    )
}