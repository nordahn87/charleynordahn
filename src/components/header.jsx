import Rhombus from '../svg/rhombus'

const Header = () => {
    return (
        <header className="h-screen">
            <div className="h-full w-full flex justify-center items-center absolute">
                <Rhombus />
            </div>
            <section className="grid grid-cols-2">
                <div className="bg-blue h-screen"></div>
                <div className="bg-orange h-screen"></div>
            </section>
        </header>
    );
}

export default Header;
