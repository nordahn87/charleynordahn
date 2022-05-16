import { useState } from "react"
import FollowMe from './follow-me'
import NavigationItem from "./navigation/item";
import NavData from '../.data/navigation.json'

const Navigation = () => {
    const [toggleMobileNavMenu, setToggleMobileNavMenu] = useState(false)

    const closeOpen = () => {
        setToggleMobileNavMenu(!toggleMobileNavMenu)

    }

    return (
        <>
            <nav className='fixed flex w-full justify-end items-center top-0 z-50'>

                <div className={(toggleMobileNavMenu ? 'right-0' : '-right-[400px]') + ' fixed z-40 text-2xl flex flex-col top-0 text-white justify-center items-center bg-black h-screen max-width-mobile transition-all'}>
                <div className="flex flex-col mb-12">
                    {NavData.map((item) => {
                        return (
                            <NavigationItem
                                key={item.id}
                                name={item.name}
                                link={item.link} />
                        )
                    })}
                </div>
                    <FollowMe />
            </div>



             
                    <button
                        className="bg-black justify-center items-center p-6 bg-black  z-50 top-0 right-0"
                        onClick={closeOpen}>
                        <i className={(toggleMobileNavMenu ? 'la-times' : 'la-bars') + ' las text-4xl text-white'}></i>

                    </button>
             



                    





            </nav>
        </>
    )
}

export default Navigation
