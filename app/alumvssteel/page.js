
import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';

// https://nextjs.org/docs/app/building-your-application/routing/defining-routes

function AlumSteel() {
    return (
        <>
            <Head>
                <title>alum and steel</title>
            </Head>

            <main>
                <h1>
                    alum and steel
                </h1>

                {/* <Link className="backButton" href="/">Back</Link> */}
            </main>


        </>
    );
}

export default AlumSteel;