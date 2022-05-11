
const SkillItem = (props) => {
    return (
        <>
            <section className="flex flex-col items-center nisse">
                <div className="my-4 text-black">
                    <i className={(props.icon) + ' text-6xl'}></i>
                </div>
                {props.listItem.map((currentItem, index) => {
                    return (
                        <div className="flex items-center text-black" key={index}>
                            <p>{currentItem}</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default SkillItem