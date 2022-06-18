import React from 'react'
import { Link } from 'react-router-dom';

//Assests
import phone from "../Assets/phone.svg";

const SignUp = () => {
    return (
        <>
            <div className='flex '>
                <div className='w-full sm:w-3/4  '>
                    <div className='m-auto'>
                    <h1 className='text-center font-bold text-2xl m-9 mt-4'>
                        Sign Up 
                    </h1>
                    </div>
                  
                    <div className='w-full m-auto  sm:w-1/2 p-4 '>
                        <form action="" className='flex flex-col gap-4  bg-slate-100 rounded p-5 '>
                            <label htmlFor="" className=''>
                                Enter your Email
                            </label>
                            <input type="email"  className=' ' required name="" id="" />
                            <label htmlFor="" className=''>
                                Enter your name
                           </label>
                            <input type="text" className='  ' required name="" id="" />
                            <label htmlFor="" className=''>
                                Enter your password
                           </label>
                            <input type="password"  required className=' ' name="" id="" />
                            <label htmlFor="" className=''>
                                Re-Enter your password
                           </label>
                            <input type="password" required  className=' ' name="" id="" />
                            <label htmlFor="" className=''>
                                EMI Amount
                           </label>
                            <input type="text"  required className=' ' name="" id="" />
                            <label htmlFor="" className=''>
                                Number of working days
                           </label>
                            <input type="text" required className=' ' name="" id="" />
                           
                            <Link to={"/dashboard"}>
                            <input type="submit" value="Continue" className='bg-sky-600 text-white w-full h-9 mt-8 ' ></input>
                        </Link>                           
                            
                        </form>
                    </div>
                </div>
                <div className='w-1/4 h-96 items-end justify-items-end ml-3/4 mt-32 hidden sm:block'>
                    <img
                        src={phone}
                        alt="mobile"
                        className='w-full h-full'
                    />
                </div>
            </div>
        </>
    )
}

export default SignUp;