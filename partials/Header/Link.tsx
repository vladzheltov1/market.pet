import Link from "next/link";
import { FC } from "react";

export interface IHeaderLinkProps {
    children: string,
    href: string,
}

export const HeaderLink: FC<IHeaderLinkProps> = (props) => {
    const {children, href} = props;

    return( 
        <Link href={href}>
            <a>{children}</a>
        </Link>
    )
}