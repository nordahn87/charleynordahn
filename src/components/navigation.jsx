import { useState, useEffect } from 'react'
import FollowMe from './follow-me'
import NavigationItem from './navigation/item';
import NavData from '../.data/navigation.json'

const Navigation = () => {
    const [toggleMobileNavMenu, setToggleMobileNavMenu] = useState(false)
    const [burgerNav, setBurgerNav] = useState(false)

    const closeOpen = () => {
        setToggleMobileNavMenu(!toggleMobileNavMenu)
    }

    const mobileNavClose = () => {
        if (window.innerWidth < 640) {
            setToggleMobileNavMenu(false)
        }
    }

    useEffect(() => {
        const changeBurgerNav = () => {
            if (window.scrollY >= 80) {
                setBurgerNav(true)
            } else {
                setBurgerNav(false)
            }
        }
        window.addEventListener('scroll', changeBurgerNav)
    });

    return (
        <nav className='fixed top-0 right-0 z-50'>
            <button
                className={(burgerNav ? 'bg-black' : '') + ' p-4 z-10 top-0 right-0 transition-all'}
                onClick={closeOpen}>
                <i className={(toggleMobileNavMenu ? 'la-times' : 'la-bars') + ' las text-4xl text-white'}></i>
            </button>

            <div className={(toggleMobileNavMenu ? 'right-0' : '-right-[400px]') + ' bg-black fixed text-xl flex flex-col top-0 text-white justify-center items-center h-screen max-width-mobile transition-all -z-10'}>
                <div className="flex flex-col mb-12">
                    {NavData.map((item) => {
                        return (
                            <NavigationItem
                                key={item.id}
                                name={item.name}
                                link={item.link}
                                toggleCloseOpen={mobileNavClose}
                            />
                        )
                    })}
                </div>
                <FollowMe />
            </div>

        </nav>
    )
}

export default Navigation
