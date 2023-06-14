
import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';

// https://nextjs.org/docs/app/building-your-application/routing/defining-routes

function Axles() {
    return (
        <>
            <Head>
                <title>Axles</title>
            </Head>

            <main>
                <h1>
                    Axles
                </h1>

                {/* <Link className="backButton" href="/">Back</Link> */}
            </main>


        </>
    );
}

export default Axles;