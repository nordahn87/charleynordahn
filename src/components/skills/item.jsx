
const SkillItem = (props) => {
    return (
        <>
            <section className='flex flex-col items-center mx-4 nisse'>
                <div className="my-4 text-white">
                    <i class={(props.icon) + ' la-2x'}></i>
                </div>
                {props.listItem.map((currentItem, index) => {
                    return (
                        <div className='flex items-center text-white' key={index}>
                            <p>{currentItem}</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default SkillItem