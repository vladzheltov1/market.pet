import { Page } from '@/layouts/Page';
import { assemblePageTitle } from '@/utils/title';
import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>{assemblePageTitle("Добро пожаловать")}</title>
            </Head>
            <Page>
                Главная страница
            </Page>
        </>
    )
}

export default HomePage;