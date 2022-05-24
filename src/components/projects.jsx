import Arrow from "../svg/arrow";
import WebsiteItem from '../components/projects/websites/item'
import WebsitesData from '../.data/projects/websites.json'
import LogoItem from '../components/projects/logos/item'
import LogosData from '../.data/projects/logos.json'

const Projects = () => {
    return (
        <section id="projekter" className="flex flex-col items-center w-full pb-24 pt-24 sm:pt-48 relative">
            <div className="absolute top-[10px]">
                <Arrow fill="#00a0a5" />
            </div>


            <section className="h-full max-w-5xl w-full flex flex-col items-center justify-center max-width-wrapper px-6 lg:px-2">
                <h2 className="font-bold md:text-left text-4xl sm:text-7xl text-black uppercase my-8 tracking-wide font-jost">
                    Projekter
                </h2>

                <h3 className="font-extrabold md:text-left text-black text-2xl sm:text-4xl uppercase my-8 tracking-wide font-jost">
                    Hjemmesider
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {WebsitesData.map((item) => {
                        return (
                            <WebsiteItem
                                key={item.id}
                                link={item.link}
                                src={item.src}
                                alt={item.alt}
                                title={item.title}
                                tool={item.tool}
                                description={item.description}
                            />
                        )
                    })}
                </div>

                <h3 className="font-bold text-3xl md:text-left text-2xl sm:text-4xl text-black uppercase my-8 tracking-wide font-jost">
                    Logoer
                </h3>
                <div className="grid  lg:grid-cols-3 gap-16 sm:gap-24 lg:gap-10 w-[90%] lg:w-full">
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
