import { useState } from "react"

const WebsiteItem = (props) => {

    const [toggleleAccordion, setToggleleAccordion] = useState(false)

    // Open and close accordion
    const toogleAccordion = () => {
        setToggleleAccordion(!toggleleAccordion)
    }

    return (
        <section>
            <div className="overflow-hidden max-h-[320px] group relative homepage-item">
                <div className="overflow-hidden">
                    <a
                        href={props.link}
                        target="_blank"
                        rel="noreferrer">
                        <div className="absolute flex w-full h-full justify-center z-20">
                            <p className="absolute bottom-[-40px] group-hover:bottom-[45%]  text-white text-3xl  opacity-0 group-hover:opacity-100 transition-all">Gå til side</p>
                        </div>
                        <img
                            className="group-hover:scale-105 transition-all homepage-item-hover"
                            src={props.src}
                            alt={props.link} />
                    </a>
                </div>
            </div>

            <section>
                <div
                    onClick={toogleAccordion}
                    className={(toggleleAccordion ? 'bg-neutral-200' : 'bg-orange') + ' transition-all flex justify-between items-center cursor-pointer hover:bg-orange px-8 py-4'}>

                    <h4 className="font-semibold text-xl">{props.title}</h4>
                    <i className={(toggleleAccordion ? 'la-times' : 'la-plus') + ' las text-3xl'}></i>
                </div>

                <div className={(toggleleAccordion ? 'max-h-[500px]' : 'max-h-0') + ' overflow-hidden flex flex-col transition-all '}>
                    <div className="p-8 pt-0 pb-4 bg-neutral-200">
                        <hr className="h-[2px] bg-neutral-400 mb-4" />
                        <h4 className="font-bold">Værktøjer</h4>

                        <p className="mb-4">
                            {props.tool}
                        </p>

                        <h4 className="font-bold">Opgavebeskrivelse</h4>

                        <p className="mb-6">
                            {props.description}
                        </p>

                        <a
                            href={props.link}
                            target="_blank"
                            rel="noreferrer">
                            <button className="bg-blue text-lg hover:bg-black hover:text-white p-4 w-[180px] transition-all">
                                Gå til side
                            </button>
                        </a>
                    </div>

                    <div
                        className="bg-neutral-200 h-[80px] mt-[-1px]"
                        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 1%, 50% 100%, 0 1%)' }}>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default WebsiteItem
