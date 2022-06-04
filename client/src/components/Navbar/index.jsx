import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

// assets
import logo from "../../Assets/Logo.png";
import logoText from "../../Assets/PayRozana.png";

const MobileNav = () => {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    return (
        <>
            <div className='md:hidden flex items-center justify-between mr-5 ml-2 h-20'>
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

                <div onClick={() => setIsHamburgerOpen(prev => !prev)} className="w-12 h-12">
                    <GiHamburgerMenu className='text-2xl mt-3' />
                </div>
                {isHamburgerOpen && (
                    <div className="absolute shadow-lg py-3 top-20 -right-3  z-20 bg-white w-027 flex flex-col gap-2 justify-items-center">
                        <button className='font-bold'>About Us</button>
                        <button className='font-bold'>Team</button>
                        <button className='font-bold'>Contact Us</button>
                    </div>
                )}


            </div>
        </>
    )
}

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
                <MobileNav />
                <LargeNav />
            </nav>
        </>
    )
}

export default Navbar