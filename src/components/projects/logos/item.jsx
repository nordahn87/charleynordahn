const LogoItem = (props) => {
    return (
        <div className="flex justify-center items-center">
            <img src={props.src} alt={props.alt} className="w-full" />
        </div>
    )
}

export default LogoItem
