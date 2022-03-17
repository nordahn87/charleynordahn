import Arrow from '../svg/arrow'

const About = () => {
    return (
        <>
            <section id="about" className="bg-yellow-200 h-screen flex flex-col items-center pt-4 relative">
                <Arrow fill="#f37421" className="arrow-shape" />

                <section className="bg-red-300 h-full max-w-5xl w-full flex flex-col items-center justify-center px-6">
                    <section className="w-full max-w-3xl flex flex-col items-center">
                        <h1 className="font-black text-4xl  md:text-left sm:text-6xl mb-8 uppercase tracking-wide">Webudvikler med flair for design</h1>
                        <div className="grid sm:grid-cols-4 gap-6">
                            <div className="grid place-content-center md:place-content-start">
                                <img src="/img/profile.png" alt="profil billede" className="pis" />
                            </div>
                            <p className="font-regular text-base grid sm:col-span-3 mb-10 content-center">
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
