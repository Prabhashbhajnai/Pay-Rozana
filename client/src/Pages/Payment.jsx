import React from 'react';

// Assets
import qr from "../Assets/QR.svg";

const Payment = () => {
    return (
        <>
            <div className='flex flex-row justify-evenly lg:mt-10 items-center'>
                <div className=''>
                    
                    {/* Online Payment */}
                    <div className='w-full'>
                        <h1 className='text-2xl font-semibold'>Online</h1>
                        <div className='flex flex-col bg-gray-300 h-24 justify-around'>
                            <div className='flex gap-10 justify-center mr-7'>
                                <h1 className='flex text-xl'>Enter amount for UPI: </h1>
                                <div className='flex flex-col gap-3 items-center'>
                                    <input type={Number} className='h-7' />
                                    <button className='bg-black text-white h-8 w-32'>Generate QR</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cash Payment */}
                    <div className='mt-7'>
                        <h1 className='text-2xl font-semibold'>Cash</h1>
                        <div className='flex flex-col bg-gray-300 h-24 justify-around'>
                            <div className='flex gap-10 justify-center mr-7'>
                                <h1 className='flex text-xl'>Enter Cash amount: </h1>
                                <div className='flex flex-col gap-3 items-center'>
                                    <input type={Number} className='h-7' />
                                    <button className='bg-black text-white h-8 w-32'>Deposit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Qr Code */}
                <div className='w-96'>
                    <img
                        src={qr}
                        alt="QR Code"
                        className='w-96 h-96'
                    />
                </div>
            </div>
        </>
    );
};

export default Payment;