import { PageHead } from "@/components/PageHead";
import { Page } from "@/layouts/Page";
import { FC } from "react";
import notFoundStyles from "./NotFound.module.scss";

const NotFoundPage: FC = () => {
    return (
        <>
            <PageHead title={"Страница не найдена"} />
            <Page>
                <div className={notFoundStyles.not_found__container}>
                    <div className={notFoundStyles.not_found__code}>404!</div>
                    <div className={notFoundStyles.not_found__description}>Страница не найдена</div>
                </div>
            </Page>
        </>
    )
} 

export default NotFoundPage;