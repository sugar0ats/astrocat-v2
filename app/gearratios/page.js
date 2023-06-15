
import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';

// https://nextjs.org/docs/app/building-your-application/routing/defining-routes

function GearRatios() {
    return (
        <>
            <Head>
                <title>gear ratios</title>
            </Head>

            <main>
                <h1>
                    gear ratios
                </h1>

                {/* <Link className="backButton" href="/">Back</Link> */}
            </main>


        </>
    );
}

export default GearRatios;