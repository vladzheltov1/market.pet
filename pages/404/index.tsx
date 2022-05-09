import { Page } from "@/layouts/Page";
import { assemblePageTitle } from "@/utils/title";
import Head from "next/head";
import { FC } from "react";
import notFoundStyles from "./NotFound.module.scss";

const NotFoundPage: FC = () => {
    return (
        <>
            <Head>
                <title>{assemblePageTitle("Страница не найдена")}</title>
            </Head>
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