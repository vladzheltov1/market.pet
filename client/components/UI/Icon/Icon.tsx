import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

export interface IIconProps {
    icon: IconProp,
}

export const Icon: FC<IIconProps> = (props) => {
    const {icon} = props as IIconProps;

    return (
        <FontAwesomeIcon icon={icon}  />
    )
}