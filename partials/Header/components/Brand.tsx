import Link from "next/link";
import { FC } from "react";
import headerStyles from "../Header.module.scss";

export const HeaderBrand: FC = () => {
    return (
        <Link href="/">
            <a>
                <h2 className={headerStyles.header__brand}>Market.pet</h2>
            </a>
        </Link>
    )
}