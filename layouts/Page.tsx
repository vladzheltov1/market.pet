import { Wrapper } from "@/components/Wrapper";
import { Header } from "@/partials/Header";
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