
import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';

// https://nextjs.org/docs/app/building-your-application/routing/defining-routes

function IntroToVex() {
    return (
        <RootLayout>
            <Head>
                <title>Intro To VEX</title>
            </Head>

            <main>
                <h1>
                    Intro To VEX
                </h1>

                {/* <Link className="backButton" href="/">Back</Link> */}
            </main>


        </RootLayout>
    );
}

export default IntroToVex;