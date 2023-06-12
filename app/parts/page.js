
import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';

// https://nextjs.org/docs/app/building-your-application/routing/defining-routes

function Parts() {
    return (
        <RootLayout>
            <Head>
                <title>Parts</title>
            </Head>

            <main>
                <h1>
                    Parts
                </h1>

                {/* <Link className="backButton" href="/">Back</Link> */}
            </main>


        </RootLayout>
    );
}

export default Parts;