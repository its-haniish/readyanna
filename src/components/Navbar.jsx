import React, { useState } from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar=() => {
    const [isAsideOpen, setIsAsideOpen]=useState(false);

    const closeAsideMenu=() => {
        setIsAsideOpen(false);
    }

    return (
        <>
            {/* This will render the AsideMenu when isAsideOpen is true */}
            {isAsideOpen&&<AsideMenu closeAsideMenu={closeAsideMenu} />}

            <nav className='flex justify-between items-center bg-[#1b242f] p-2 h-fit w-screen '>
                <div className='flex items-center gap-2'>
                    <HiMenuAlt1 size={24} color='white' onClick={() => setIsAsideOpen(true)} />
                    <img src="/logo.png" alt="readyanna" className='w-32' />
                </div>
                <div className='flex items-center gap-2'>
                    <button className='rounded-2xl bg-white px-4 py-2 text-[#1b242f] text-sm font-semibold'>
                        Login
                    </button>
                    <button className='rounded-2xl bg-[#f7c139] px-4 py-2 text-[#1b242f] text-sm font-semibold'>
                        Sign up
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar

const AsideMenu=({ closeAsideMenu }) => {
    const links=[
        {
            icon: "star-white.png",
            title: "Favourites",
            href: "/favourites"
        },
        {
            icon: "live.webp",
            title: "Live Events",
            href: "/live-events"
        },
        {
            icon: "upcomingmatch.png",
            title: "Upcoming Match",
            href: "/upcoming-match"
        },
        {
            icon: "slot.png",
            title: "Slots",
            href: "/slots"
        },
        {
            icon: "live.webp",
            title: "Live Casino",
            href: "/live-casino"
        },
        {
            icon: "promotions.png",
            title: "Promotions",
            href: "/promotions"
        },
        {
            icon: "promotions.png",
            title: "Instant Games",
            href: "/instant-games"
        },
        {
            icon: "referfriend.png",
            title: "Refer a Friend",
            href: "/refer-a-friend"
        }
    ]
    return (
        <aside className='flex flex-col w-64 bg-black fixed top-0 left-0 h-[100vh]'>
            <div className="flex justify-between items-center p-2 bg-[#1b242f] w-full border-b-[0.5px] border-b-gray-700">
                <img src="/logo.png" alt="readyanna" className='w-32' />
                <RxCross2 size={20} color="white" onClick={closeAsideMenu} />
            </div>
            <div style={{ background: 'linear-gradient(90deg, #2e2e2e, #1b242f)' }} className='h-full' >
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className='flex items-center gap-3 pl-4 py-3 border-b-[0.5px] border-b-gray-700 text-white hover:text-yellow-400 transition-colors duration-200'
                    >
                        <img src={`/icons/${link.icon}`} alt={link.title} className='w-[20px] h-[20px]' />
                        <span className='text-[16px] font-semibold'>{link.title}</span>
                    </a>
                ))}
            </div>
            {/* Add more menu items here if necessary */}
        </aside>
    )
}
