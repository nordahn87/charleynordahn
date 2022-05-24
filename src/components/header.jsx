import Rhombus from '../svg/rhombus'
import HeaderButtons from './header/buttons'

const Header = () => {
    return (
        <header id="#" className="h-screen">
            <section className="h-full w-full flex flex-col justify-center items-center absolute p-4">
                <Rhombus className="h-[90vh] w-full mb-4 sm:mb-0" />
                    <HeaderButtons className="sm:hidden" />
            </section>
            <section className="grid grid-cols-2">
                <div className="bg-blue h-screen"></div>
                <div className="bg-orange h-screen"></div>
            </section>
        </header>
    );
}

export default Header;
