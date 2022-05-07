import { Icon } from "@/components/UI/Icon";
import { assembleShopSearchLink } from "@/utils/search";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { FC, MouseEventHandler, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import headerStyles from "./Header.module.scss";

export interface IHeaderSearchProps {};

export const HeaderSearch: FC<IHeaderSearchProps> = (props) => {
    const [value, setValue] = useState<string>(""); 

    const router = useRouter();

    const handleClick: MouseEventHandler = () => {
        router.push(assembleShopSearchLink({title: value}));
    }

    return (
        <InputGroup>
            <FormControl
                type="search"
                placeholder="Поиск"
                className={headerStyles.header__search}
                onChange={event => setValue(event.target.value)}
                value={value}
            />
            <Button 
                variant="danger"
                className={headerStyles.header__search_button}
                onClick={handleClick}
            >
                <Icon icon={faSearch} />
            </Button>
        </InputGroup>
    )
}