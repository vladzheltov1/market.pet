import { FC, MouseEventHandler, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import headerStyles from "./Header.module.scss";

export interface IHeaderSearchProps {};

export const HeaderSearch: FC<IHeaderSearchProps> = (props) => {
    const [value, setValue] = useState(""); 

    const handleClick: MouseEventHandler = () => {
        console.log(value);
    }

    return (
        <InputGroup>
            <FormControl
                type="search"
                placeholder="Search"
                className={headerStyles.header__search}
                onChange={event => setValue(event.target.value)}
                value={value}
            />
            <Button 
                variant="danger"
                className={headerStyles.header__search_button}
                onClick={handleClick}
            >
                Search
            </Button>
        </InputGroup>
    )
}