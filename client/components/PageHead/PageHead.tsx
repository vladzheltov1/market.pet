import { assemblePageTitle } from "@/utils/title";
import Head from "next/head";
import { FC, ReactNode } from "react";

export interface IPageHeadProps {
    children?: ReactNode | ReactNode[],
    title?: string
}

export const PageHead: FC<IPageHeadProps> = (props) => {
    const {children, title = ""} = props as IPageHeadProps;

    return <Head>
        <>
            {title && (
                <title>{assemblePageTitle(title)}</title>
            )}
            {children && (
                {children}
            )}
        </>
    </Head>
}