import React from 'react';
import { Link } from 'react-router-dom';

const LargeFooter = () => {
    return (
        <>
            <div className='text-center w-full'>
                {/* <h1 className='font-bold text-2xl mb-5'>Contact Us</h1> */}
                <div className='bg-black text-white  '>
                    <div className='w-full flex justify-between'>
                        <div className='w-1/2 text-left p-6'>
                            <h1 className=''>Email: payrozana@gmail.com</h1>
                            <h1>Phone - +91 7620397529</h1>
                        </div>
                        <div className='w-1/2 text-right p-6'>
                            <h1>Address: Kothri Kalan,MP</h1>
                        </div>
                    </div>
                    <div className='w-full flex justify-between p-4'>
                        <div>
                            <h1>Quick links:-</h1>
                        </div>
                        <div>
                            <a href="/aboutus">About Us</a>
                        </div>
                        <div>
                            <a href="#">Our Team</a>
                        </div>
                        <div>
                            <a href="/contactus">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <nav>
                <LargeFooter>

                </LargeFooter>
            </nav>
        </>
    )
}

export default Footer