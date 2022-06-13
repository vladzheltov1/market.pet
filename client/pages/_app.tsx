import "bootstrap/scss/bootstrap.scss";
import type { AppProps } from 'next/app';
import { SSRProvider } from "react-bootstrap";
import '../styles/globals.scss';

function Application({ Component, pageProps }: AppProps) {
    return (
        <SSRProvider>
            <Component {...pageProps} />
        </SSRProvider>
    )
}

export default Application;
