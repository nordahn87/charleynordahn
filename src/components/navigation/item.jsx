const NavigationItem = (props) => {
    return (
        <a
            className='hover:text-primary capitalize m-2 hover:text-blue transition-all'
            href={`#${props.link}`}>
            {props.name}
        </a>

    )
}

export default NavigationItem
