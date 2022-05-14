import { Icon } from "@/components/UI/Icon";
import { Wrapper } from "@/components/Wrapper";
import { faBars, faBasketShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import { FC, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { HeaderBrand } from "./components/Brand";
import { HeaderCategories } from "./components/Categories";
import { HeaderDropdown } from "./components/Dropdown";
import { HeaderRow } from "./components/HeaderRow";
import { HeaderLink } from "./components/Link";
import { HeaderSearch } from "./components/Search";
import headerStyles from "./Header.module.scss";

const HEADER_COLLAPSE_BREAK_POINT = 960;

export const Header: FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const resizeHandler = () => {
        if (open) {
            setOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])

    const collapseCondition = (): boolean => {
        return (open && (window.innerWidth <= HEADER_COLLAPSE_BREAK_POINT))
            || (window.innerWidth > HEADER_COLLAPSE_BREAK_POINT);
    }

    return (
        <div className={headerStyles.header}>
            <Wrapper>
                <HeaderRow className={headerStyles.header_top_row}>
                    <div className={headerStyles.header_top__brand_toggle}>
                        <HeaderBrand />
                        <Button className={headerStyles.header__collapse_button} variant="light" onClick={() => setOpen(!open)}>
                            <Icon icon={faBars} />
                        </Button>
                    </div>
                    {collapseCondition() ? (
                        <div className={headerStyles.header__collapse}>
                            <HeaderSearch />
                            <div className={headerStyles.header__link_group}>
                                <HeaderLink href="/shop" icon={faShop}>Магазин</HeaderLink>
                                <HeaderLink href="/cart" icon={faBasketShopping}>Корзина</HeaderLink>
                            </div>
                            <HeaderDropdown />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </HeaderRow>
                <HeaderRow className={headerStyles.header_bottom_row}>
                    <HeaderCategories />
                </HeaderRow>
            </Wrapper>
        </div>
    )
}