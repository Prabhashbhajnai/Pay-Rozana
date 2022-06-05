import React from 'react'

//Assests
import person4 from "../Assets/person4.svg";

const Login = () => {
  return (
    <>
         <div className='flex flex-row mt-20 '>
                <div className='w-3/4 m-4 text-start sm:w-1/2'>
                <div className='w-3/4 sm:w-1/2 bg-slate-100 rounded p-5 sm: m-auto  '>
                <h1 className='font-bold text-2xl mb-5'>Log in</h1>
                <form action="" className='flex flex-col'>
                    <label htmlFor="" className='font-bold mt-4'>Enter your mail</label>
                    <input className='bg-slate-300 mt-2 h-9' required type="email" />
                    <label htmlFor="" className='font-bold mt-4' >Enter password</label>
                    <input  className='bg-slate-300 mt-2 h-9' required type="password" />
                    <input type="submit" value="Submit" className='bg-sky-600 text-white h-9 mt-8' ></input>
                </form>
                </div>
                </div>
                
                <div className='w-1/4 h-96 items-start  sm:w-1/2 '>
                        <img
                            src={person4}
                            alt="person"
                            className='w-full h-full'
                        />
                    </div>
                
            </div>
    </>
  )
}

export default Login;