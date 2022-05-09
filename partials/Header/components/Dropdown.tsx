import { FC } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import headerStyles from "../Header.module.scss";

export const HeaderDropdown: FC = () => {
    return (
        <Nav>
            <NavDropdown
                title={"Профиль"}
                className={headerStyles.header__dropdown}
            >
                <NavDropdown.Item href="/profile">Мой профиль</NavDropdown.Item>
                <NavDropdown.Item href="/wish">Избранное</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/user/unlog">Выход</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}