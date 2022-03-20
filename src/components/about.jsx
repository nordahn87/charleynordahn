import Arrow from '../svg/arrow'

const About = () => {
    return (
        <>
            <section id="about" className="h-screen flex flex-col items-center pt-4 relative">
                <Arrow fill="#f37421" className="w-[180px] sm:w-[280px]" />
                <section className="h-full max-w-5xl w-full flex flex-col items-center justify-center px-6">
                    <section className="w-full max-w-3xl flex flex-col items-center">
                        <h1 className="font-extrabold text-4xl md:text-left sm:text-5xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-wide font-jost">
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
                </section>
            </section>
        </>
    );
}

export default About;
