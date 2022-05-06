import { Icon } from "@/components/UI/Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { FC } from "react";

export interface IHeaderLinkProps {
    children: string,
    href: string,
    icon: IconProp
}

export const HeaderLink: FC<IHeaderLinkProps> = (props) => {
    const {children, href, icon} = props;

    return( 
        <Link href={href}>
            <a>
                <Icon icon={icon} />
                {children}
            </a>
        </Link>
    )
}