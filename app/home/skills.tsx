import { m } from "framer-motion";

type skills = {
    title: string,
    image: string,
    time: string,
}

const skillsSection: skills[] = [
    {
        title: "Python",
        image: "/python.svg",
        time: "4 years",
    },
    {
        title: "JavaScript",
        image: "/javascript.svg",
        time: "4 years",
    },
    {
        title: "C#",
        image: "/csharp.svg",
        time: "1 year"
    },
    {
        title: "C++",
        image: "/cpp.svg",
        time: "1 year"
    },
    {
        title: "HTML/CSS",
        image: "/html5.svg",
        time: "2 years"
    },
    {
        title: "React Native/React",
        image: "/react.svg",
        time: "2 years"
    },
]

export default function Skills() {
    return (
        <>
            <m.h1                    
                initial={{opacity: 0, y: '7vh'}}
                whileInView={{opacity: 1, y: 0, transition: {duration: 1}}}
                viewport={{once: true, amount: 'some', margin: '10%'}}
                id={'aboutMe'} className='dark:text-main text-d-main self-center text-4xl border-b-4 font-medium border-third dark:border-d-third p-1 ml-[5%] mt-[5vh] sm:mt-[10vh] mb-[5vh] self-baseline w-fit;'
            >        
                Skills
            </m.h1>

            <div className="flex flex-wrap gap-6 p-4 justify-around mb-15">
                {skillsSection.map((item) => {
                    return(
                            <m.div key={item.title} className="flex flex-col items-center justify-center aspect-square p-4 border border-gray-200 rounded-2xl shadow-2xl p-4 rounded-md border-b-4"
                                initial={{opacity: 0, y: '7vh'}}
                                whileInView={{opacity: 1, y: 0, transition: {duration: 1}}}
                                viewport={{once: true, amount: 'some', margin: '10%'}}
                            >
                                <p className="text-2xl text-d-main font-medium md:text-2xl text-center text-white-600 font-medium md:w-2/3 whitespace-pre-line md:mx-4">
                                    {item.title}
                                </p>
                                <div className="flex items-center justify-center mb-3 rounded-md">
                                    <img src={item.image} width={250} height={250}/>
                                </div>
                                <p className="text-2xl text-d-main font-medium md:text-2xl text-center text-white-600 font-medium md:w-2/3 whitespace-pre-line md:mx-4">
                                    {item.time}
                                </p>
                            </m.div>
                        )}
                    )
                }
            </div>
        </>
    )
}