const Arrow = (props) => {
    return (
		<svg viewBox="0 0 250 130" className="w-[120px] sm:w-[180px] mb-4" >
			<polygon points="125,130 250,0 195.1,0 125,72.9 54.9,0 0,0 125,130 125,130 125,130 125,130" fill={props.fill} />
		</svg>
    );
}

export default Arrow;
