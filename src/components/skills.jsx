import Arrow from '../svg/arrow'
import SkillItem from './skills/item';
import SkillItemData from '../.data/skills.json'

const Skills = () => {
    return (
        <>
            <section id="about" className="h-screen flex flex-col items-center pt-4 relative">
                <Arrow fill="#f37421" className="w-[180px] sm:w-[280px]" />
                <section className="h-full max-w-5xl w-full flex flex-col items-center justify-center px-6">
                    <section className="w-full max-w-3xl flex flex-col items-center">
                        <h2 className="font-extrabold text-4xl md:text-left sm:text-5xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-wide font-jost">
                            Færdigheder
                        </h2>
                        <div className="flex">
                            {SkillItemData.map((item, index) => {
                                return (
                                    <SkillItem 
                                        key={index}
                                        icon={item.icon}
                                        listItem={item.listItem}
                                    />
                                )
                            })}
    
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Skills;
