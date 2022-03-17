const Rhombus = (props) => {
    return (
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className={props.className} >
            {/* Inner rhombus */}
            <rect x="259.6" y="259.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -207.1068 500)" width="480.8" height="480.8" fill="white" />
            {/* Outer rhombus */}
            <path d="M500,51.3L948.7,500L500,948.7L51.2,500L500,51.3 M500,0.5L0.5,500L500,999.5L999.5,500L500,0.5L500,0.5z" fill="white" />
            {/* Title Charley Nordahn START*/}
            <path d="M363.2,474.3c4.1,0,7.7-0.5,10.7-1.4c3.1-0.9,5.6-2.2,7.6-3.8c2-1.6,3.5-3.3,4.5-5.2c1-1.9,1.5-3.7,1.5-5.5
			c0-1.6-0.4-3.1-1.3-4.4c-0.9-1.3-2.2-2.2-3.9-2.8c-0.6,1.5-1.4,2.9-2.3,4.2c-0.9,1.3-2,2.4-3.2,3.4c-1.2,0.9-2.5,1.7-3.8,2.2
			c-1.3,0.5-2.7,0.8-4.2,0.8c-2.7,0-4.8-0.6-6.4-1.7c-1.6-1.2-2.8-2.9-3.5-5.2c-0.7-2.3-1.1-5.1-1.1-8.5c0-2.7,0.2-5.5,0.7-8.4
			c0.5-2.8,1.1-5.5,2-8c0.9-2.5,1.9-4.8,3.2-6.8c1.2-2,2.7-3.6,4.3-4.7c1.6-1.1,3.4-1.7,5.3-1.7c1.9,0,3.3,0.6,4.3,1.7
			c1,1.1,1.5,2.5,1.5,4.2c0,1.2-0.3,2.4-0.9,3.6c-0.6,1.2-1.4,2.1-2.5,2.8s-2.5,1.1-4.1,1.2c-0.3,0-0.6,0-0.9-0.1
			c-0.3-0.1-0.6-0.1-0.9-0.2c-0.2,0.6-0.3,1.3-0.3,2c0,2.2,0.9,4,2.7,5.5c1.8,1.5,4.2,2.2,7.1,2.2c2.7,0,5.1-0.7,7.1-2.1
			c2.1-1.4,3.7-3.3,4.8-5.6c1.2-2.3,1.7-4.8,1.7-7.3c0-2.5-0.6-4.8-1.8-7c-1.2-2.2-3.1-4-5.7-5.3c-2.6-1.3-5.9-2-10-2
			c-4.5,0-8.6,0.7-12.3,2.1c-3.7,1.4-6.9,3.4-9.8,5.9c-2.8,2.5-5.2,5.4-7.1,8.7s-3.4,6.8-4.4,10.6c-1,3.8-1.5,7.7-1.5,11.7
			c0,8.2,2,14.4,5.9,18.6C350.2,472.2,355.8,474.3,363.2,474.3z"/>
            <path d="M438.8,426.6c-2.3-1.7-5.3-2.6-9-2.6c-3.1,0-6,0.6-8.7,1.7c-2.3,0.9-4.2,2.3-5.9,4.2c0.1-0.4,0.2-0.7,0.3-1.1
			c0.5-1.8,1-3.5,1.5-5.2c0.5-1.7,0.9-3.3,1.2-4.8c0.4-1.5,0.6-2.9,0.8-4.2s0.3-2.4,0.3-3.4c0.1-2.8-0.7-4.8-2.3-5.9
			c-1.6-1.2-3.5-1.7-5.8-1.7c-1.3,0-2.6,0.2-4.1,0.5c-1.4,0.3-2.8,0.9-4.2,1.7c0.1,0.6,0.1,1.2,0.1,1.9c0,0.7,0,1.4,0,2.2
			c-0.1,2.1-0.3,4.5-0.6,7.1c-0.3,2.6-0.7,5.3-1.1,8c-0.4,2.3-0.8,4.6-1.3,6.9l0,0l-8.3,42.3l16.4-1.6l5.2-27.1
			c0.4-2.1,1-4.2,1.8-6.4c0.8-2.2,1.8-4.1,3-5.6c1.2-1.5,2.7-2.3,4.6-2.3c1.4,0,2.4,0.5,2.9,1.4c0.5,0.9,0.8,2.1,0.8,3.5
			c0,1.3-0.2,3-0.5,5c-0.4,2-0.8,4.1-1.3,6.4c-0.5,2.3-1,4.5-1.6,6.8c-0.5,2.3-1,4.4-1.4,6.4c-0.4,2-0.6,3.7-0.6,5
			c0,3,0.9,5.2,2.6,6.6c1.8,1.4,4.1,2.1,6.9,2.1c2.3,0,4.4-0.5,6.4-1.5c2-1,3.4-2.6,4.1-4.7c-1.5-0.1-2.5-0.6-3.1-1.5
			c-0.6-0.9-0.9-1.9-0.9-3.2c0-1.2,0.2-2.7,0.5-4.5c0.4-1.8,0.8-3.7,1.3-5.8c0.5-2.1,1-4.2,1.5-6.4c0.5-2.2,1-4.3,1.3-6.4
			c0.4-2,0.5-3.9,0.5-5.4C442.2,431.1,441,428.3,438.8,426.6z"/>
            <path d="M452.8,472.1c2.1,1.5,4.9,2.2,8.2,2.2c2.9,0,5.4-0.5,7.7-1.4c2.3-0.9,4.2-2.2,5.8-3.8c0.5,1.8,1.6,3.1,3.2,3.9
			c1.6,0.9,3.3,1.3,5.2,1.3c1.5,0,2.9-0.2,4.3-0.6c1.4-0.4,2.7-1.1,3.8-2c1.1-0.9,1.9-2.1,2.4-3.6c-1.4-0.1-2.4-0.5-3.1-1.4
			c-0.6-0.9-1-1.9-1-3c0-0.5,0.1-1.2,0.2-1.9c0.1-0.7,0.2-1.4,0.3-1.9l6.8-35.6l-13.1,1.6c-3.3-1.2-6.5-1.8-9.6-1.8
			c-3.9,0-7.5,0.8-10.8,2.5c-3.3,1.6-6.2,3.9-8.7,6.9c-2.5,3-4.4,6.4-5.8,10.3c-1.4,3.9-2.1,8.2-2.1,12.7c0,3.6,0.5,6.7,1.5,9.4
			C449.1,468.5,450.6,470.6,452.8,472.1z M462.4,453.3c0.2-2.8,0.7-5.6,1.2-8.4c0.6-2.8,1.3-5.3,2.3-7.7c0.9-2.3,2.1-4.2,3.4-5.6
			c1.3-1.4,2.9-2.1,4.7-2.1c0.7,0,1.6,0.2,2.5,0.5c0.9,0.3,1.9,0.8,2.8,1.5l-4.4,24.9c-0.3,1.8-0.8,3.6-1.5,5.5
			c-0.7,1.9-1.6,3.5-2.7,4.8c-1.1,1.3-2.6,2-4.4,2c-1.8,0-2.9-0.8-3.5-2.3c-0.5-1.6-0.8-3.3-0.8-5.2
			C462,458.7,462.1,456.2,462.4,453.3z"/>
            <path d="M544.1,434.3c0-3.2-0.9-5.7-2.7-7.5c-1.8-1.8-4.4-2.7-7.9-2.7c-3.2,0-5.9,0.8-8.3,2.3c-2.3,1.6-4.2,3.8-5.5,6.6l1.4-8.8
			l-13.3,1.6l-9.3,48.2l16.8-1.6l4.4-26.5c0.4-2.2,0.8-4.2,1.4-6c0.5-1.8,1.2-3.4,1.8-4.7c0.7-1.3,1.4-2.3,2.3-3.1
			c0.9-0.7,1.8-1.1,2.9-1.1c1.1,0,1.8,0.4,2.2,1.1c0.4,0.7,0.6,1.6,0.6,2.7c0,1.6-0.3,3.4-1,5.4c-0.6,2-1.5,3.7-2.5,5
			c0.5,0.6,1.3,1,2.3,1.3c1,0.2,1.9,0.4,2.9,0.4c3.4,0,6.2-1.2,8.3-3.6C543.1,441,544.1,437.9,544.1,434.3z"/>
            <path d="M542.8,465.7c0,2.9,0.9,5,2.7,6.4c1.8,1.4,4,2.1,6.8,2.1c1.5,0,3-0.2,4.4-0.6c1.4-0.4,2.7-1.1,3.8-2
			c1.1-0.9,1.9-2.1,2.2-3.6c-1.3-0.1-2.3-0.5-2.9-1.4c-0.6-0.9-0.9-1.9-0.9-3c0-0.4,0-0.8,0.1-1.3c0.1-0.5,0.2-1.3,0.4-2.5
			c0.2-1.2,0.5-2.9,1-5.3c0.5-2.3,1.1-5.5,1.9-9.5c0.8-4,1.9-9,3.2-15.3c0.4-2.1,0.8-4.1,1.2-6.1c0.4-2,0.7-3.8,1-5.5
			c0.3-1.7,0.5-3.2,0.6-4.5c0.2-1.3,0.2-2.3,0.2-3c0-2.7-0.8-4.6-2.5-5.7c-1.6-1.1-3.5-1.6-5.7-1.6c-1.5,0-3,0.2-4.5,0.6
			c-1.6,0.4-2.9,0.9-4.2,1.6c0.2,0.5,0.3,1.2,0.4,2c0.1,0.8,0.1,1.6,0.1,2.5c0,1.8-0.2,3.9-0.5,6.5c-0.3,2.6-0.8,5.6-1.5,9
			c-0.4,2-0.8,4.2-1.3,6.6c-0.5,2.4-1.1,4.9-1.6,7.4c-0.5,2.6-1.1,5.1-1.6,7.7c-0.5,2.6-1,5-1.5,7.3c-0.4,2.3-0.8,4.4-1.1,6.3
			C542.9,462.9,542.8,464.5,542.8,465.7z"/>
            <path d="M578.4,472.3c2.8,1.3,6.1,2,9.8,2c3.4,0,6.6-0.5,9.5-1.6s5.2-2.5,6.9-4.4c1.7-1.9,2.6-4.1,2.6-6.5c0-1-0.2-1.8-0.5-2.5
			c-0.3-0.7-0.9-1.3-1.8-1.8c-1.2,2-2.9,3.5-5.2,4.6c-2.3,1-4.7,1.6-7,1.6c-2.9,0-4.9-0.7-6-2.2c-1.2-1.5-1.7-3.6-1.7-6.3
			c0-0.6,0-1.3,0.1-2.1c0.1-0.8,0.1-1.5,0.2-2.2c0.7,0,1.5,0,2.3,0s1.6,0,2.4,0c4.9-0.2,9.1-1,12.6-2.3c3.4-1.3,6.1-3,7.9-5.3
			c1.8-2.3,2.7-4.9,2.7-8c0-3-0.7-5.3-2.1-6.9c-1.4-1.6-3.2-2.7-5.4-3.4c-2.2-0.6-4.6-1-7.3-1c-5,0-9.3,0.9-13,2.6
			c-3.7,1.8-6.7,4.2-9,7.2c-2.3,3-4.1,6.4-5.2,10.1c-1.1,3.7-1.7,7.6-1.7,11.5c0,4.3,0.8,7.9,2.4,10.6
			C573.3,468.9,575.5,471,578.4,472.3z M587.5,439.2c0.7-2.2,1.5-4.1,2.4-5.6c0.9-1.5,1.9-2.7,3-3.5c1.1-0.8,2.2-1.2,3.4-1.2
			c1.3,0,2.3,0.4,2.9,1.3c0.6,0.9,0.9,2.1,0.9,3.7c0,2-0.3,3.7-1,5.3c-0.7,1.6-1.6,2.9-2.9,4.1c-1.3,1.1-2.8,2-4.5,2.6
			c-1.7,0.6-3.7,0.9-5.8,0.9C586.2,443.9,586.8,441.4,587.5,439.2z"/>
            <path d="M655,445.6c1.5-2.6,2.6-5,3.5-7.4c0.9-2.4,1.3-4.6,1.3-6.7c0-1.8-0.3-3.2-1-4.3c-0.7-1.1-1.6-1.9-2.7-2.4
			c-1.1-0.5-2.4-0.7-3.7-0.7c-1.7,0-3.2,0.3-4.6,0.9c-1.3,0.6-2.5,1.3-3.4,2.2c0.3,0.9,0.5,1.8,0.5,2.7c0.1,0.9,0.1,1.8,0.1,2.6
			c0,3.4-0.5,6.9-1.5,10.4c-1,3.5-2.4,7-4.1,10.3c-1.7,3.3-3.7,6.4-5.9,9.3l0.1-11.7c0.1-1.8,0.1-3.7,0-5.6c0-1.9-0.1-3.6-0.1-5.2
			c0-1.6-0.1-2.8-0.1-3.6c-0.2-2.7-0.6-5-1.2-6.9c-0.6-1.8-1.6-3.2-3.1-4.1c-1.4-0.9-3.5-1.4-6.1-1.4c-1.7,0-3.3,0.2-4.9,0.7
			c-1.6,0.5-3,1.3-4.3,2.4c1.1,0.7,1.9,1.7,2.5,3.1c0.5,1.4,1,3.4,1.3,6.1c0.4,3,0.7,6.1,0.9,9.5c0.2,3.3,0.4,6.9,0.5,10.9
			c0.2,3.9,0.3,8.4,0.4,13.4l6.8-0.3c-1.6,1.1-3.1,2.3-4.5,3.7c-1.4,1.4-2.6,2.8-3.4,4.4c-0.9,1.6-1.3,3.3-1.3,5
			c0,2.5,0.7,4.4,2.2,5.8c1.5,1.3,3.4,2,5.8,2c1.9,0,3.8-0.3,5.6-1c1.9-0.6,3.5-1.6,4.9-2.9c-1.2-1-2.1-2.2-2.9-3.7
			c-0.8-1.5-1.1-3-1.1-4.4c0-2.7,0.7-5,2-6.8c1.3-1.8,3-3.6,4.9-5.5c1.9-1.8,3.8-3.8,5.8-6c2-2.3,3.9-4.6,5.8-7.2
			C651.9,450.7,653.5,448.2,655,445.6z"/>
            <path d="M392.6,522.1c1.4-2,3-3.5,4.7-4.4c1.7-0.9,3.5-1.4,5.5-1.4c1.5,0,3.1,0.4,4.7,1.1c1-1.5,1.6-3.2,1.6-5.1
			c0-2.3-0.8-4.4-2.3-6.2c-1.6-1.8-3.7-2.7-6.5-2.7c-1.5,0-3,0.2-4.5,0.6c-1.6,0.4-3.2,1.3-4.8,2.7c-1.6,1.4-3.3,3.5-5,6.3
			c-1.7,2.8-3.4,6.6-5.1,11.3c-1.7,4.7-3.3,10.7-5,17.8c-1.4,6.1-2.8,13.3-4.2,21.6l-12.4-41.8c-3.3-0.1-6.5-0.3-9.5-0.7
			c-3-0.4-6.1-0.9-9.1-1.3c-3-0.5-6.3-0.7-9.8-0.7c-3.8,0-7,0.5-9.8,1.6c-2.7,1.1-5,2.5-6.8,4.3c-1.8,1.8-3.1,3.7-3.9,5.9
			c-0.9,2.2-1.3,4.3-1.3,6.5c0,2.2,0.4,4.2,1.3,6.1c0.9,1.9,2.1,3.3,3.9,4.4c1.7,1.1,3.9,1.6,6.4,1.6c0.9,0,1.9-0.2,3.1-0.5
			c1.1-0.4,2.1-1,3-1.8c-0.9-1.9-1.5-3.6-1.9-5.2c-0.3-1.6-0.5-3.2-0.5-5c0-3.9,1-6.9,3.1-9c2-2.1,4.7-3.2,7.9-3.2
			c1.8,0,3.5,0.3,5.1,0.8l0.2,0.3c-0.5,2.8-1,5.7-1.5,8.5c-0.8,4.2-1.6,8.3-2.5,12.3c-0.9,4-1.9,7.7-2.9,11.2
			c-1.1,3.5-2.3,6.5-3.6,9.2c-1.3,2.6-2.8,4.8-4.4,6.4c-1.6,1.6-3.4,2.5-5.4,2.7c-0.3,0.7-0.5,1.5-0.5,2.2c0,1.5,0.6,2.9,1.8,4.1
			c1.2,1.2,2.8,1.8,4.7,1.8c1.4,0,2.8-0.3,4.2-0.9c1.4-0.6,2.8-1.6,4.1-3c1.3-1.4,2.6-3.3,3.8-5.8c1.2-2.4,2.4-5.5,3.5-9.3
			c1.1-3.8,2.1-8.3,3.1-13.5c0.7-3.7,1.3-8,1.9-12.6l9.1,31.9c0.7,2.3,1.6,4.3,2.7,6.2c1,1.9,2.4,3.3,4.1,4.4
			c1.7,1.1,3.8,1.6,6.4,1.6c1.2,0,2.4-0.1,3.7-0.4c1.3-0.2,2.5-0.5,3.6-0.9c1.6-8.5,3-16,4.4-22.5c1.3-6.5,2.7-12.2,3.9-17.1
			s2.6-8.9,3.9-12.3C389.8,526.9,391.2,524.2,392.6,522.1z"/>
            <path d="M430.2,538.5c-1.6-1.6-3.5-2.8-5.8-3.6c-2.3-0.8-5.1-1.2-8.2-1.2c-4.6,0-8.6,0.8-12.1,2.5c-3.5,1.6-6.4,3.9-8.8,6.9
			c-2.4,2.9-4.2,6.3-5.4,10.2c-1.2,3.9-1.8,8-1.8,12.4c0,2.9,0.4,5.4,1.2,7.7c0.8,2.3,2,4.2,3.6,5.8c1.6,1.6,3.6,2.8,5.9,3.7
			c2.4,0.8,5.1,1.2,8.1,1.2c4.5,0,8.5-0.8,12-2.5c3.5-1.7,6.4-4,8.8-7c2.4-3,4.2-6.4,5.4-10.3c1.2-3.9,1.8-8,1.8-12.4
			c0-2.8-0.4-5.3-1.2-7.5C433,542,431.8,540.1,430.2,538.5z M419.1,554c-0.3,2.9-0.7,5.8-1.3,8.6c-0.6,2.9-1.3,5.5-2.2,7.9
			c-0.9,2.4-1.9,4.3-3.2,5.8c-1.2,1.4-2.6,2.1-4.1,2.1c-1.8,0-3.1-0.7-3.8-2c-0.7-1.3-1.1-3-1.1-5c0-2.5,0.1-5.2,0.4-8.1
			c0.3-2.9,0.7-5.8,1.2-8.6s1.3-5.5,2.1-7.8c0.9-2.3,1.9-4.2,3.2-5.7c1.2-1.4,2.7-2.1,4.2-2.1c1.8,0,3.1,0.6,3.7,1.9
			c0.7,1.3,1,3,1,5C419.5,548.5,419.4,551.1,419.1,554z"/>
            <path d="M480.3,536.4c-1.8-1.8-4.4-2.7-7.9-2.7c-3.2,0-5.9,0.8-8.3,2.3c-2.3,1.6-4.2,3.8-5.5,6.6l1.4-8.8l-13.3,1.6l-9.3,48.2
			l16.8-1.6l4.4-26.5c0.4-2.2,0.8-4.2,1.4-6c0.5-1.8,1.2-3.4,1.8-4.7c0.7-1.3,1.4-2.3,2.3-3.1c0.9-0.7,1.8-1.1,2.9-1.1
			c1.1,0,1.8,0.4,2.2,1.1c0.4,0.7,0.6,1.6,0.6,2.7c0,1.6-0.3,3.4-1,5.4c-0.6,2-1.5,3.7-2.5,5c0.5,0.6,1.3,1,2.3,1.3
			c1,0.2,1.9,0.4,2.9,0.4c3.4,0,6.2-1.2,8.3-3.6c2.1-2.4,3.2-5.4,3.2-9.1C483,540.7,482.1,538.2,480.3,536.4z"/>
            <path d="M531.6,514.9c-1.6-1.1-3.4-1.6-5.6-1.6c-1.6,0-3.2,0.2-4.7,0.6c-1.6,0.4-2.9,0.9-4,1.6c0.1,0.9,0.2,1.7,0.2,2.6
			c0,0.9,0,1.8,0,2.7c-0.1,2.4-0.4,5-0.8,7.9c-0.3,1.9-0.6,3.9-1,6c-0.8-0.3-1.7-0.5-2.7-0.6c-1.4-0.2-2.9-0.3-4.3-0.3
			c-3.8,0-7.4,0.8-10.7,2.5c-3.3,1.6-6.2,3.9-8.7,6.9c-2.5,3-4.4,6.4-5.8,10.3c-1.4,3.9-2.1,8.2-2.1,12.7c0,3.6,0.5,6.7,1.5,9.4
			c1,2.7,2.6,4.7,4.7,6.2c2.1,1.5,4.9,2.2,8.2,2.2c2.9,0,5.4-0.5,7.7-1.4c2.3-0.9,4.2-2.2,5.8-3.8c0.5,1.8,1.6,3.1,3.2,3.9
			c1.6,0.9,3.3,1.3,5.2,1.3c1.5,0,2.9-0.2,4.3-0.6c1.4-0.4,2.7-1.1,3.8-2s1.9-2.1,2.4-3.6c-1.4-0.1-2.4-0.5-3.1-1.4
			c-0.6-0.9-1-1.9-1-3c0-0.5,0.1-1.2,0.2-1.9c0.1-0.7,0.2-1.4,0.3-1.9c1.3-5.7,2.4-11.1,3.4-16.4c0.9-4.9,1.8-9.7,2.7-14.3l0,0
			c0.6-2.8,1.1-5.4,1.6-7.8c0.4-2.4,0.8-4.4,1.1-6.2c0.3-1.8,0.4-3.1,0.4-3.9C534,518,533.2,516,531.6,514.9z M509.9,566
			c-0.3,1.8-0.8,3.6-1.5,5.5c-0.7,1.9-1.6,3.5-2.7,4.8c-1.1,1.3-2.6,2-4.4,2c-1.8,0-2.9-0.8-3.5-2.3s-0.8-3.3-0.8-5.2
			c0-2.3,0.1-4.9,0.4-7.7c0.2-2.8,0.7-5.6,1.2-8.4c0.6-2.8,1.3-5.3,2.3-7.7c0.9-2.3,2.1-4.2,3.4-5.6c1.3-1.4,2.9-2.1,4.7-2.1
			c0.7,0,1.6,0.2,2.5,0.5c0.9,0.3,1.9,0.8,2.8,1.5L509.9,566z"/>
            <path d="M578.1,569.5l6.8-35.6l-13.1,1.6c-3.3-1.2-6.5-1.8-9.6-1.8c-3.9,0-7.5,0.8-10.8,2.5c-3.3,1.6-6.2,3.9-8.7,6.9
			c-2.5,3-4.4,6.4-5.8,10.3c-1.4,3.9-2.1,8.2-2.1,12.7c0,3.6,0.5,6.7,1.5,9.4c1,2.7,2.6,4.7,4.7,6.2c2.1,1.5,4.9,2.2,8.2,2.2
			c2.9,0,5.4-0.5,7.7-1.4c2.3-0.9,4.2-2.2,5.8-3.8c0.5,1.8,1.6,3.1,3.2,3.9c1.6,0.9,3.3,1.3,5.2,1.3c1.5,0,2.9-0.2,4.3-0.6
			c1.4-0.4,2.7-1.1,3.8-2s1.9-2.1,2.4-3.6c-1.4-0.1-2.4-0.5-3.1-1.4c-0.6-0.9-1-1.9-1-3c0-0.5,0.1-1.2,0.2-1.9
			C578,570.7,578.1,570.1,578.1,569.5z M563.2,566c-0.3,1.8-0.8,3.6-1.5,5.5c-0.7,1.9-1.6,3.5-2.7,4.8c-1.1,1.3-2.6,2-4.4,2
			c-1.8,0-2.9-0.8-3.5-2.3c-0.5-1.6-0.8-3.3-0.8-5.2c0-2.3,0.1-4.9,0.4-7.7c0.2-2.8,0.7-5.6,1.2-8.4c0.6-2.8,1.3-5.3,2.3-7.7
			c0.9-2.3,2.1-4.2,3.4-5.6c1.3-1.4,2.9-2.1,4.7-2.1c0.7,0,1.6,0.2,2.5,0.5c0.9,0.3,1.9,0.8,2.8,1.5L563.2,566z"/>
            <path d="M634,536.3c-2.3-1.7-5.3-2.6-9-2.6c-3.1,0-6,0.6-8.7,1.7c-2.3,0.9-4.2,2.3-5.9,4.2c0.1-0.4,0.2-0.7,0.3-1.1
			c0.5-1.8,1-3.5,1.5-5.2c0.5-1.7,0.9-3.3,1.2-4.8c0.4-1.5,0.6-2.9,0.8-4.2s0.3-2.4,0.3-3.4c0.1-2.8-0.7-4.8-2.3-5.9
			c-1.6-1.2-3.5-1.7-5.8-1.7c-1.3,0-2.6,0.2-4.1,0.5c-1.4,0.3-2.8,0.9-4.2,1.7c0.1,0.6,0.1,1.2,0.1,1.9c0,0.7,0,1.4,0,2.2
			c-0.1,2.1-0.3,4.5-0.6,7.1c-0.3,2.6-0.7,5.3-1.1,8c-0.4,2.3-0.8,4.6-1.3,6.9l0,0l-8.3,42.3l16.4-1.6l5.2-27.1
			c0.4-2.1,1-4.2,1.8-6.4c0.8-2.2,1.8-4.1,3-5.6c1.2-1.5,2.7-2.3,4.6-2.3c1.4,0,2.4,0.5,2.9,1.4c0.5,0.9,0.8,2.1,0.8,3.5
			c0,1.3-0.2,3-0.5,5c-0.4,2-0.8,4.1-1.3,6.4c-0.5,2.3-1,4.5-1.6,6.8c-0.5,2.3-1,4.4-1.4,6.4c-0.4,2-0.6,3.7-0.6,5
			c0,3,0.9,5.2,2.7,6.6c1.8,1.4,4.1,2.1,6.9,2.1c2.3,0,4.4-0.5,6.4-1.5c2-1,3.4-2.6,4.1-4.7c-1.5-0.1-2.5-0.6-3.1-1.5
			c-0.6-0.9-0.9-1.9-0.9-3.2c0-1.2,0.2-2.7,0.5-4.5c0.4-1.8,0.8-3.7,1.3-5.8c0.5-2.1,1-4.2,1.5-6.4c0.5-2.2,1-4.3,1.3-6.4
			c0.4-2,0.5-3.9,0.5-5.4C637.3,540.7,636.2,538,634,536.3z"/>
            <path d="M687.7,562.7c0.5-2.1,1-4.3,1.5-6.5c0.5-2.2,1-4.3,1.3-6.4c0.4-2,0.5-3.8,0.5-5.4c0-3.8-1.1-6.5-3.4-8.2
			c-2.3-1.7-5.4-2.6-9.3-2.6c-3.5,0-6.7,0.7-9.5,2.1c-2.9,1.4-5.2,3.7-6.8,6.9l1.4-8.8l-13.3,1.6l-9.5,48.2l16.4-1.6l5.2-27.1
			c0.4-2.1,1-4.2,1.8-6.4c0.8-2.2,1.8-4.1,3-5.6c1.2-1.5,2.7-2.3,4.6-2.3c1.4,0,2.4,0.5,2.9,1.4c0.5,0.9,0.8,2.1,0.8,3.5
			c0,1.3-0.2,3-0.5,5c-0.4,2-0.8,4.1-1.3,6.4c-0.5,2.3-1,4.5-1.6,6.8c-0.5,2.3-1,4.4-1.4,6.4c-0.4,2-0.6,3.7-0.6,5
			c0,3,0.9,5.2,2.7,6.6c1.8,1.4,4.1,2.1,6.9,2.1c2.3,0,4.4-0.5,6.4-1.5c2-1,3.4-2.6,4.1-4.7c-1.5-0.1-2.5-0.6-3.1-1.5
			c-0.6-0.9-0.9-1.9-0.9-3.2c0-1.2,0.2-2.7,0.5-4.5C686.8,566.8,687.2,564.8,687.7,562.7z"/>
            {/* Title Charley Nordahn END */}
        </svg>
    );
}

export default Rhombus;