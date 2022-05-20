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
                            <div className="grid place-content-center md:place-content-start">
                                <img src="/assets/profile.png" alt="Profil billede" className="profile-img" />
                            </div>
                            <p className="font-regular text-base grid sm:col-span-3 content-center">
                                Ung mand på 35 år med begge ben forankret i den jyske muld derudover er jeg en Kvalitetsbevidst webudvikler med flair for design og stor faglig stolthed. 
                                Da udvikling indenfor teknologi går hurtigt er jeg bevidst om hvor vigtigt det er at være åben over for ny læring. 
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
