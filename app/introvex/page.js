
import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';
import Image from 'next/image';
import Polaroid from '/components/polaroid';
import SpeechBubble from '@/components/speechBubble';

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

                    <Polaroid 
                        imageURL="/cosmo.jpg"
                        width={682/2}
                        height={900/2}
                        caption="me :)"

                    />

                    <SpeechBubble
                        text="howdy! the name's cosmo. i'm an aspiring astronaut hoping to make machines to get to space someday."
                    />

                    <Polaroid 
                        imageURL="/catonmoon.png"
                        width={1720/3}
                        height={1080/3}
                        caption="pom-pom <33!"

                    />

                    <SpeechBubble
                        text="my brother pom-pom is already up there. he's living the high life (no pun intended), but there's one problem..."
                    />

                    <Polaroid 
                        imageURL="/hungrypompom.png"
                        width={500}
                        height={500}
                        caption="as of yesterday, pom-pom has run out of food for the trip!!"

                    />

                    <SpeechBubble
                        text="so here's the plan: send cookies to pom-pom from earth by doing what i do best—make robots!"
                    />

                    <div className="paper">
                        <h3>
                            MISSION STATEMENT: send cookies to pom-pom!
                        </h3>

                        <ul>
                            <li>
                                mentor: cosmo the tabby
                            </li>

                            <li>
                            deliverables: functional VEX robot that can send many cookies high up!
                            </li>
                            
                            <li>
                            deadline: ASAP!!
                            </li>

                            <li>
                            training: begins NOW!
                            </li>

                        </ul>
                    </div>
                    

                    

                </article>

                <Link
                    href="/alumvssteel">
                        <button>
                            next
                        </button>
                    </Link>
                

                {/* <Link className="backButton" href="/">Back</Link> */}
            </main>


        </>
    );
}

export default IntroToVex;