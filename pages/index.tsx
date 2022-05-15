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
                <div></div>
            </Page>
        </>
    )
}

export default HomePage;