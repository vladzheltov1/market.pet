import { Page } from '@/layouts/Page';
import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Добро пожаловать — Market.pet</title>
            </Head>
            <Page>
                Главная страница
            </Page>
        </>
    )
}

export default HomePage;