import { Wrapper } from "@/components/Wrapper";
import { faBasketShopping, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { HeaderBrand } from "./Brand";
import { HeaderCategories } from "./Categories";
import { HeaderDropdown } from "./Dropdown";
import headerStyles from "./Header.module.scss";
import { HeaderRow } from "./HeaderRow";
import { HeaderLink } from "./Link";
import { HeaderSearch } from "./Search";

export const Header: FC = (props) => {
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