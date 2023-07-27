

import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';
import SpeechBubble from '@/components/speechBubble';
import Polaroid from '@/components/polaroid';
import RulesClient from '@/components/rulesClient';
import React from 'react';
import Image from 'next/image';

// https://nextjs.org/docs/app/building-your-application/routing/defining-routes

function Axles() {



    return (
        <div>
            
            <Head>
                <title>Axles</title>
            </Head>

            <div>
                <h1>
                    Axles
                </h1>
                
                <div>
                    <header className='subtitle'>
                        SO WHAT'S THE BIG DEAL ABOUT AXLES?
                    </header>

                    <SpeechBubble text="I'm glad you asked! Axles are usually metal rods that you put wheels, gears, or sprockets on. They're also known as drive shafts. In VEX, they look like this."/>

                    <Polaroid imageURL="/axleintro.png" width={1598/2} height={966/2} caption="axles come in normal and high-strength flavors. the high strength ones are thicker."/>

                    <SpeechBubble text="But when using axles, you have to ensure that it's supported and that you've reduced friction as much as possible. That way, your motors will experience less strain and overheat infrequently! Here's an example from the VEX website about support: "/>

                    <Polaroid imageURL="/pointsofsupport.png" width={1918/2.3} height={966/2.3} caption="2 points of support are always best!"/>

                    <SpeechBubble text="Not only that, but you can't just put an axle through a c-channel and expect it to spin perfectly. The holes on the c-channel are a lot bigger, and the friction between the axle and the c-channel will cause a lot of strain. You'll need to use a bearing flat for that. More on that later, though."/>

                    <Polaroid imageURL="/nobearing.png" width={2522/3} height={1700/3} caption="see how much space is left in the hole?"/>

                    <Polaroid imageURL="/withbearing.png" width={2522/3} height={1700/3} caption="there. much better! the circular shape of the hole in the bearing allows the axle to spin without jostling around too much."/>

                    <SpeechBubble text="With all that being said, let's list some ground rules when using axles. Let's focus on a specific case (although the rules here can be applied anywhere): making wheels spin on a chassis!"/>


                    <div class="row">
                        <div class="column">
                            <Image src="/wobbly.png" width="150" height="150" className="columnIcon"/>

                            <div className="columnTitle">NO WOBBLING!</div>
                            <div className="content" style={{color: "black", padding:"2rem"}}>As mentioned previously, wobbling is one of our biggest enemies. As a general rule of thumb, we should always try to keep things from sliding around on the axle and make sure that axle is secure---meaning it won't fall out of the motor.</div>

                        </div>

                        <div class="column">
                            <Image src="/bearingflatsocool.png" width="150" height="150"className="columnIcon"/>
                            <div className="columnTitle">USE BEARING FLATS</div>

                            <div className="content" style={{color: "black", padding:"2rem"}}>Bearing flats have smaller holes that will support your axles better than the holes in c-channels. Place bearing flats flush again c-channels and feed your axles through them! </div>
                            <Image src="/withbearing.png" width={400} height={300}/>
                        </div>
                        
                        <div class="column">
                            <Image src="/washerneededmetal.png" width="150" height="150" className="columnIcon"/>
                            <div className="columnTitle">USE WASHERS TO REDUCE FRICTION</div>

                            <div className="content" style={{color: "black", padding:"2rem"}}>Teflon washers are helpful for reducing friction between spinning and non-spinning parts. For example, putting a washer between a c-channel and a shaft collar would prevent the metal-on-metal friction. </div>
                            <Image src="/washerexplan.png" width="400" height="400"/>


                        </div>

                        
                        
                    </div>

                    <div class="row">
                    
                        <div class="column">
                            <Image src="/shaftcollarsocool.png" width="150" height="150" className="columnIcon"/>
                            <div className="columnTitle">USE SHAFT COLLARS</div>

                            <div className="content" style={{color: "black", padding:"2rem"}}>Placing shaft collars strategically ensures your axle won't fall out of the motor. It also prevents parts on the axle from moving. A common mistake is using more shaft collars than is necessary, although there are practical uses for using more. Another problem is placing them flush against the wrong part (for example, the motor as opposed to the c-channel it'll naturally fall out of). Here are some examples: </div>
                            <div class="row">
                                <Image src="/wrongshaftcollar.png" width="200" height="200"/>
                                <Image src="/rightshaftcollar.png" width="200" height="200"/>
                            </div>

                                

                                <div className="content" style={{color: "black", padding:"2rem"}}>On the left: the shaft collar is flush against the motor. There is extra room between the collar and the c-channel that will allow for jostling. </div>
                            
                            <Image src="/altshaftcollar.png" width="400" height="400"/>
                            
                        </div>
                        
                    </div>

                    <div className="row">
                    <div class="column">
                            <Image src="/2pointsofsupport.png" width="150" height="150" className="columnIcon"/>
                            <div className="columnTitle">2 POINTS OF SUPPORT</div>

                            <div className="content" style={{color: "black", padding:"2rem"}}>With two points of support, we ensure that the axle is adequately supported and it won't wobble. You could feed the axle through the sides of a c-channel, Or, you could just use 2 c-channels placed sideways and feed it through that way. This is how we'll set up, as this allows us to protect the wheel from both sides.</div>

                            <Image src="/cchansexplan.png" width="400" height="300"/>
                        </div>
                    <div class="column">
                            <Image src="/spacerneeded.png" width="150" height="150" className="columnIcon"/>
                            <div className="columnTitle">USE SPACERS TO CREATE BREATHING ROOM</div>

                            <div className="content" style={{color: "black", padding:"2rem"}}>Give your parts some space! For example, when sandwiching a wheel between two c-channels, it'll be hard for that wheel to spin when it's squeezed by the metal on both sides. So, putting spacers between the parts allows for "breathing room." You don't even need to use spacers to create space---with the right placement of shaft collars, you can accomplish the same thing.</div>
                            <Image src="/spacersecure.png" width={400} height={300}/>

                            <Image src="/shaftcollarsecure.png" width={400} height={300}/>
                        </div>

                        
                    </div>
                    

                </div>

                
            </div>

            

        </div>
    );
}

export default Axles;