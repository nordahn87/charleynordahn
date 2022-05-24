const HeaderButtons = (props) => {
    return (
        <a
            className={(props.className) + ' flex justify-center items-center py-6 px-8 bg-black text-white text-lg hover:bg-white hover:text-black w-[200px] mb-6 transition-all'}
            role="button"
            href="#projekter"
            rel="noreferrer">Projekter
        </a>
    );
}

export default HeaderButtons;
