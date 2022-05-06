import { FC, ReactNode } from "react";
import headerStyles from "./Header.module.scss";

export interface IHeaderRowProps {
    className?: string,
    children: ReactNode | Array<ReactNode>
}

export const HeaderRow: FC<IHeaderRowProps> = (props) => {
    const {children, className} = props as IHeaderRowProps;

    return <div className={`${headerStyles.header_row} ${className}`}>
        {children}
    </div>
}