import Arrow from '../svg/arrow'
import FollowMe from './follow-me'

const About = () => {
    return (
        <>
            <section id="about" className="flex flex-col items-center pb-24 pt-24 sm:pt-48 relative">
                <div className="absolute top-[10px]">
                    <Arrow fill="#f37421" />
                </div>
                <section className="h-full max-w-5xl w-full flex flex-col items-center justify-center px-6">
                    <section className="w-full max-w-3xl flex flex-col items-center mb-8">
                        <h1 className="font-extrabold text-3xl md:text-left sm:text-5xl md:text-6xl lg:text-7xl my-8 uppercase tracking-wide font-jost">
                            Webudvikler med flair for design
                        </h1>
                        <div className="grid sm:grid-cols-4 gap-6">
                            <div className="grid place-content-center md:place-content-start">
                                <img src="/img/profile.png" alt="Profil billede" className="profile-img" />
                            </div>
                            <p className="font-regular text-base grid sm:col-span-3 content-center">
                                Kvalitets bevidst webudvikler med flair for design. Stor faglig stolthed og erfaring indenfor webudvikling.
                                Klar på at tilegne mig ny viden og møder nye opgaver med engagement og nysgerrighed. Åben og udadvendt teamplayer,
                                der bidrager socialt med en ligefrem og imødekommende humor.
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
