import { Wrapper } from "@/partials/Wrapper";
import { FC } from "react";
import { HeaderCategories } from "./Categories";
import { HeaderDropdown } from "./Dropdown";
import headerStyles from "./Header.module.scss";
import { HeaderLink } from "./Link";
import { HeaderSearch } from "./Search";

export const Header: FC = (props) => {
    return (
        <Wrapper>
            <div className={headerStyles.header}>
                <div className={`${headerStyles.header_row} ${headerStyles.header_top_row}`}>
                    <h2 className={headerStyles.header__brand}>Market.pet</h2>
                    <HeaderSearch />
                    <div className={headerStyles.header__link_group}>
                        <HeaderLink href="/cart">Корзина</HeaderLink>
                        <HeaderLink href="/purchases">Заказы</HeaderLink>
                    </div>
                    <HeaderDropdown />
                </div>
                <div className={headerStyles.header_row + headerStyles.header_bottom_row}>
                    <HeaderCategories />
                </div>
            </div>
        </Wrapper>
    )
}