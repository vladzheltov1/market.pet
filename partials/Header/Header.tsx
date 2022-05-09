import { Wrapper } from "@/components/Wrapper";
import { faBasketShopping, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { HeaderBrand } from "./components/Brand";
import { HeaderCategories } from "./components/Categories";
import { HeaderDropdown } from "./components/Dropdown";
import { HeaderRow } from "./components/HeaderRow";
import { HeaderLink } from "./components/Link";
import { HeaderSearch } from "./components/Search";
import headerStyles from "./Header.module.scss";

export const Header: FC = () => {
    return (
        <div className={headerStyles.header}>
            <Wrapper>
                <HeaderRow className={headerStyles.header_top_row}>
                    <HeaderBrand />
                    <HeaderSearch />
                    <div className={headerStyles.header__link_group}>
                        <HeaderLink href="/cart" icon={faCartShopping}>Корзина</HeaderLink>
                        <HeaderLink href="/purchases" icon={faBasketShopping}>Заказы</HeaderLink>
                    </div>
                    <HeaderDropdown />
                </HeaderRow>
                <HeaderRow className={headerStyles.header_bottom_row}>
                    <HeaderCategories />
                </HeaderRow>
            </Wrapper>
        </div>
    )
}