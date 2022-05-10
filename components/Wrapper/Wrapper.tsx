import { FC, ReactNode } from "react";
import wrapperStyles from "./Wrapper.module.scss";

export interface IWrapperProps {
    maxWidth?: number | string,
    children: ReactNode | ReactNode[]
}

export const Wrapper: FC<IWrapperProps> = (props) => {
    const {children, maxWidth} = props as IWrapperProps;

    return (
        <div className={wrapperStyles.wrapper} style={{maxWidth}}>
            {children}
        </div>
    )

}