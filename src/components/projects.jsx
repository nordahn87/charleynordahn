import Arrow from "../svg/arrow";
import LogoItem from '../components/projects/logos/item'
import LogosData from '../.data/logos.json'

const Projects = () => {
    return (
        <section id="projekter" className="flex flex-col items-center w-full pb-24 pt-24 sm:pt-48 relative">
            <div className="absolute top-[10px]">
                <Arrow fill="#00a0a5" />
            </div>


            <section className="h-full max-w-5xl w-full flex flex-col items-center justify-center max-width-wrapper px-6 lg:px-2">
                <h2 className="font-bold text-3xl md:text-left sm:text-5xl md:text-6xl lg:text-7xl text-black uppercase my-8 tracking-wide font-jost">
                    Projekter
                </h2>




                <h3 className="font-extrabold text-3xl md:text-left sm:text-5xl md:text-4xl lg:text-4xl text-black uppercase my-8 tracking-wide font-jost">
                    Hjemmesider
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <a
                        href="http://roadbro.charleynordahn.dk/"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src="assets/roadbroscreenshot.jpg"
                            alt="Screenshot af roadbro.dk" />
                    </a>
                    <a
                        href="http://vinderuplandogby.charleynordahn.dk/"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src="assets/vinderupscreenshot.jpg"
                            alt="Screenshot af vinderuplandogny.dk" />
                    </a>
                </div>






                <h3 className="font-bold text-3xl md:text-left sm:text-5xl md:text-4xl lg:text-4xl text-black uppercase my-8 tracking-wide font-jost">
                    Logoer
                </h3>
                <div className="grid md:grid-cols-3 gap-16 w-full">
                    {LogosData.map((item) => {
                        return (
                            <LogoItem
                                key={item.id}
                                src={item.src}
                                alt={item.alt}
                            />
                        )
                    })}
                </div>
            </section>
        </section>
    );
}

export default Projects;
