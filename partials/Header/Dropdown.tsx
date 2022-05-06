import { FC } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import headerStyles from "./Header.module.scss";

export interface IHeaderDropdownProps {}

export const HeaderDropdown: FC<IHeaderDropdownProps> = (props) => {
    return (
        <Nav>
            <NavDropdown
                title={"Hello, username!"}
                className={headerStyles.header__dropdown}
            >
                <NavDropdown.Item href="/test1">Action</NavDropdown.Item>
                <NavDropdown.Item href="/test2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/test3">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}