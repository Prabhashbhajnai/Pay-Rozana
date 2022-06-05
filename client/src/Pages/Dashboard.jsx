import React from 'react'
import { FaRupeeSign } from 'react-icons/fa';


//Assests
import person5 from "../Assets/person5.svg";

const Dashboard = () => {
  return (
    <>
    <div className='text-center'>
        
       
    </div>
    <div className='flex flex-row mt-20 '>
                <div className='w-full sm:w-3/4 m-4 text-center '>
                <div className='w-full  ml-1 sm:m-auto  '>
                <h1 className='font-bold text-4xl mt-9 mb-9'>Dashboard</h1>
                <h1 className='font-bold text-2xl mb-5'>Your EMI left to pay : <br /> Rs : 30000 /- </h1>
                <h1 className='font-bold text-2xl mb-5'>Your EMI due today : <br /> Rs : 3210 /- </h1>
             
                </div>
                <div>
                    <h1 className='font-bold text-2xl mt-9'>Transactions today</h1>
                    <div className='flex flex-row mt-5'>
                        <div className='w-1/2'>
                        <h1 className='font-bold text-2xl'>Cash</h1>
                        <h1 className='font-bold text-2xl'>Rs : 2710 /-</h1>

                        </div>
                        <div className='w-1/2'>
                        <h1 className='font-bold text-2xl '>UPI</h1>
                        <h1 className='font-bold text-2xl'>Rs : 9254 /-</h1>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className='w-1/4  h-113  items-start hidden sm:block '>
                        <img
                            src={person5}
                            alt="person"
                            className='w-full h-full'
                        />
                    </div>
                
            </div>
            <div className='text-center w-1/2 m-auto bg-slate-200 p-6 mt-4 mb-12 rounded-lg'>
                <h1 className='font-bold text-2xl'>Do you want to pay your daily EMI?</h1>
                <div className='flex flex-row justify-between mt-5 '>
                    <button className='bg-green-500 w-14 rounded-lg'><h1 className='font-bold'>Yes</h1></button>
                    <button className='bg-red-500 w-14 rounded-lg`'><h1 className='font-bold'>No</h1></button>
                </div>
            </div>
        
    </>
  )
}

export default Dashboard;