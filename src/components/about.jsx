import Arrow from '../svg/arrow'
import FollowMe from './follow-me'

const About = () => {
    return (
        <>
            <section id="webudvikler" className="flex flex-col items-center pb-24 pt-24 sm:pt-48 relative">
                <div className="absolute top-[10px]">
                    <Arrow fill="#f37421" />
                </div>
                <section className="h-full max-w-5xl w-full flex flex-col items-center justify-center px-6">
                    <section className="w-full max-w-3xl flex flex-col items-center mb-8">
                        <h1 className="font-extrabold text-3xl md:text-left sm:text-6xl lg:text-7xl my-8 uppercase tracking-wide font-jost">
                            Webudvikler med flair for design
                        </h1>
                        <div className="grid sm:grid-cols-4 gap-6">
                            <div className="grid place-content-center md:place-content-start" >
                                <div className="bg-blue w-[170px] h-[170px] overflow-hidden rounded-full relative">
                                    <img src="/assets/profile.png" alt="Profil billede" className="left-[10px] top-[5px] absolute" />
                                </div>
                            </div>
                            <p className="font-regular text-base grid sm:col-span-3 pl-4 content-center">
                                Er døbt Charley Nordahn og har i 35 år haft begge ben forankret i den jyske muld. 
                                Jeg er en kvalitetsbevidst webudvikler med flair for design og stor faglig stolthed, 
                                som er drevet af at udvikle brugervenlige digitale løsninger. Jeg modtager feedback med tålmodighed 
                                og åbent sind, og vigtigst af alt motiveret af succesoplevelser.
                            </p>
                        </div>
                    </section>
                    <FollowMe />
                </section>
            </section>
        </>
    );
}

export default About;
