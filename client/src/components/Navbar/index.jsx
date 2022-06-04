import React from 'react';

// assets
import logo from "../../Assets/Logo.png";
import logoText from "../../Assets/PayRozana.png";

const LargeNav = () => {
    return (
        <>
            <div className='md:flex mt-5 h-16 gap-24 px-5 items-center hidden md:block'>
                <div className='flex w-56 items-center gap-2'>
                    <div className=''>
                        <img
                            src={logo}
                            alt="log"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-40'>
                        <img
                            src={logoText}
                            alt="logoText"
                            className='w-full h-full mt-2'
                        />
                    </div>
                </div>
                <button className='font-bold text-xl'>
                    About Us
                </button>
                <button className='font-bold text-xl'>
                    Team
                </button>
                <button className='font-bold text-xl'>
                    Contact Us
                </button>
            </div>
        </>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="lg:sticky lg:top-0 z-40 py-0 flex shadow-md lg:shadow-none w-full flex-col">
                {/* <MobileNav /> */}
                <LargeNav />
            </nav>
        </>
    )
}

export default Navbar