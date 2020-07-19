import NextNprogress from 'nextjs-progressbar';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNprogress color="#fff" height="6" />
            <Component {...pageProps} />
        </>
    );
}
