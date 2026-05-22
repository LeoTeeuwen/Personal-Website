import { m } from 'framer-motion';

export default function WorkExperience() {
    return (
        <>
            <m.h1                    
                initial={{opacity: 0, y: '7vh'}}
                whileInView={{opacity: 1, y: 0, transition: {duration: 1.2}}}
                viewport={{once: true, amount: 'some', margin: '10%'}}
                id={'aboutMe'} className='dark:text-main text-d-main self-center text-4xl border-b-4 font-medium border-third dark:border-d-third p-1 ml-[5%] mt-[5vh] sm:mt-[10vh] mb-[5vh] self-baseline w-fit;'
            >        
                Work Experience
            </m.h1>

            <div className="flex w-full items-center gap-6 p-1">
                <m.div 
                    className="w-1/2 ml-50" 
                    initial={{opacity: 0, x: '-10vh'}}
                    whileInView={{opacity: 1, x: 0, transition:{duration: 1}}}
                    viewport={{once:true, amount: "some"}}
                >
                    <p className="text-d-main font-medium whitespace-pre-line md:mx-4">{`
                        ● Managed a team of 12+ interns, overseeing work, code, ensuring apt progress for our projects. Team produced 6+ key widgets for our Generalized Smart City mobile app.

                        ● Gained lots of skills in reading other’s code, teaching, training, assigning tasks, working with other managers, delegation of management, and communication skills.

                        ● Lead programmer on large project that deals with using Neural Networks in Python for tracking cars and detecting if they are parked or not. Increased time efficiency by ~50% to help with Real Time performance.
                        
                        ● Made a parking companion widget where I wrote 75% of the code, integrating it with FireStore for a smooth user experience to reserve parking spaces on a google maps view of a parking lot using APIs and Firebase Authentication.
                    `}</p>
                </m.div>

                <m.div 
                    className="w-1/2 mr-75" 
                    initial={{opacity: 0, x: '10vh'}}
                    whileInView={{opacity: 1, x: 0, transition:{duration: 1}}}
                    viewport={{once:true, amount: "some"}}
                >
                    <h1 className="text-3xl font-bold text-right">
                        APS Data Technologies
                    </h1>
                    <h3 className="text-m text-second dark:text-d-second text-right mt-1">
                        September 2022 - May 2026
                    </h3>
                </m.div>
            </div>
        </>
    )
}