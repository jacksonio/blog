import Link from "next/link";
import Head from "next/head";
import Nav from "./Nav";
import {MainLayoutComp} from '../interfaces/mainLayoutInterface'

export default function MainLayout({ children, title = 'Blog' } : MainLayoutComp) {

    return (
        <>
            <Nav />
            <main>
                <Head>
                    <title>{title}</title>
                    <meta name="keywords" content="next, js, javascript"/>
                    <meta name="description" content="this is next blog"/>
                    <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
                </Head>
                {children}
            </main>
        </>
    )
}

