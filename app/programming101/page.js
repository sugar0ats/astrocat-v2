
import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';

// https://nextjs.org/docs/app/building-your-application/routing/defining-routes

function Programming101() {
    return (
        <>
            <Head>
                <title>programming 101</title>
            </Head>

            <main>
                <h1>
                    programming basics
                </h1>

                {/* <Link className="backButton" href="/">Back</Link> */}
            </main>


        </>
    );
}

export default Programming101;