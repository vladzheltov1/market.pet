import { useRouter } from "next/router";
import { FC } from "react";
import headerStyles from "../Header.module.scss";

export const HeaderBrand: FC = () => {
    const router = useRouter();
    return (
        <h2 className={headerStyles.header__brand} onClick={() => router.reload()}>Market.pet</h2>
    )
}