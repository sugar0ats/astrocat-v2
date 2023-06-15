
import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';

// https://nextjs.org/docs/app/building-your-application/routing/defining-routes

function IntroToVex() {
    return (
        <>
            <Head>
                <title>Intro To VEX</title>
            </Head>

            <main>
                <article>
                    <h1>
                        Intro To VEX
                    </h1>
                </article>
                
                <article>
                    <header className='subtitle'>
                        where everything begins...
                    </header>
                    <div className='speechBubble'>
                        hello? is this thing on? oh! hello! i'm cosmo the cat. i like tummy rubs, freeze-dried ice cream, and robotics. ive got a bit of a problem though.

                        <div className='speechArrow'>
                            ▼
                        </div>
                    </div>

                </article>
                

                {/* <Link className="backButton" href="/">Back</Link> */}
            </main>


        </>
    );
}

export default IntroToVex;