const NavigationItem = (props) => {
    return (
        <a
            className='hover:text-primary capitalize m-2 hover:text-orange transition-all'
            onClick={props.toggleCloseOpen}
            href={`#${props.link}`}>
            {props.name}
        </a>
    )
}

export default NavigationItem
