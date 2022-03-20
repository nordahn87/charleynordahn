import Rhombus from '../svg/rhombus'

const Header = () => {
    return (
        <header className="h-screen">
            <section className="h-full w-full flex justify-center items-center absolute">
                <Rhombus className="h-[97vh] mx-2"/>
            </section>
            <section className="grid grid-cols-2">
                <div className="bg-blue h-screen"></div>
                <div className="bg-orange h-screen"></div>
            </section>
        </header>
    );
}

export default Header;
