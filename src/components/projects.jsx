import Arrow from "../svg/arrow";

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col items-center w-full pb-24 pt-24 sm:pt-48 relative">
            <div className="absolute top-[10px]">
                <Arrow fill="#00a0a5" />
                </div>
                <section className="h-full max-w-5xl w-full flex flex-col items-center justify-center">
                    <h2 className="font-extrabold text-3xl md:text-left sm:text-5xl md:text-6xl lg:text-7xl text-black uppercase my-8 tracking-wide font-jost">
                         Projekter
                    </h2>
                </section>
            </section>
    );
}

export default Projects;
