import { Icon } from "@/components/UI/Icon";
import { assembleLink } from "@/utils/redirect";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { FC, MouseEventHandler, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import headerStyles from "../Header.module.scss";
import { AutoComplete } from "./AutoComplete";

export const HeaderSearch: FC = () => {
    const [value, setValue] = useState<string>(""); 

    const router = useRouter();

    const handleClick: MouseEventHandler = () => {
        if(value.length > 0){
            router.push(assembleLink("/shop", {title: value}));
        }
    }

    return (
        <div className={headerStyles.header__search}>
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
            <AutoComplete fieldValue={value} />
        </div>
    )
}