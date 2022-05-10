import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FC } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import headerStyles from "../Header.module.scss";

type DropdownListItem = {
    label: string,
    href: string,
    isDivider: boolean
}

const loggedInUser: Array<DropdownListItem> = [
    {label: "Мой профиль", href: "/user", isDivider: false},
    {label: "Избранное", href: "/wish", isDivider: false},
    {label: "", href: "", isDivider: true},
    {label: "Выход", href: "/user/logout", isDivider: false},
];

const unloggedUser: Array<DropdownListItem> = [
    {label: "Зарегистрироваться", href: "/user/signup/", isDivider: false},
    {label: "Войти", href: "/user/login/", isDivider: false},
]

export const HeaderDropdown: FC = () => {
    const localStore = useLocalStorage();
    const dropdownListItems: Array<DropdownListItem> = localStore.get("user") ? loggedInUser : unloggedUser;

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