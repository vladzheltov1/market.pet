import { Header } from "@/partials/Header";
import { Wrapper } from "@/partials/Wrapper";
import { ILayoutProps } from "@/types/layouts";
import { FC } from "react";

export const Page: FC<ILayoutProps> = (props) => {
    const {children} = props;
    return (
        <>
            <Header />
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}