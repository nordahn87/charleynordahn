import Arrow from '../svg/arrow'
import SkillItem from './skills/item';
import SkillItemData from '../.data/skills.json'

const Skills = () => {
    return (
        <>
            <section id="faerdigheder" className="flex flex-col items-center w-full pb-24 pt-24 sm:pt-48 relative bg-orange">
                <div className="absolute top-[10px]">
                    <Arrow fill="white" />
                </div>
                <section className="h-full max-w-5xl w-full flex flex-col items-center justify-center">
                    <h2 className="font-extrabold text-3xl md:text-left sm:text-5xl md:text-6xl lg:text-7xl text-black uppercase my-8 tracking-wide font-jost">
                        Færdigheder
                    </h2>
                    <div className="grid px-6 sm:px-4 lg:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {SkillItemData.map((item) => {
                            return (
                                <SkillItem
                                    key={item.id}
                                    icon={item.icon}
                                    listItem={item.listItem}
                                />
                            )
                        })}

                    </div>
                </section>
            </section>
        </>
    );
}

export default Skills;
