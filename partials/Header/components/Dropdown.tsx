import { FC } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import headerStyles from "../Header.module.scss";

type DropdownListItem = {
    label: string,
    href: string,
    isDivider: boolean
}

const dropdownListItems: Array<DropdownListItem> = [
    {label: "Мой профиль", href: "/profile", isDivider: false},
    {label: "Избранное", href: "/wish", isDivider: false},
    {label: "", href: "", isDivider: true},
    {label: "Выход", href: "/user/logout", isDivider: false},
]

export const HeaderDropdown: FC = () => {
    return (
        <Nav>
            <NavDropdown
                title={"Профиль"}
                className={headerStyles.header__dropdown}
            >
                {dropdownListItems.map((item, idx) => (
                    <div key={idx}>
                        {item.isDivider ? (
                            <NavDropdown.Divider />
                        ) : (
                            <NavDropdown.Item 
                                className={headerStyles.header__dropdown__item} 
                                href={item.href}
                            >
                                {item.label}
                            </NavDropdown.Item>
                        )}
                    </div>
                ))}
            </NavDropdown>
        </Nav>
    )
}