import Link from "next/link";
import headerStyles from "./Header.module.scss";

export const HeaderBrand = () => {
    return (
        <Link href="/">
            <a>
                <h2 className={headerStyles.header__brand}>Market.pet</h2>
            </a>
        </Link>
    )
}