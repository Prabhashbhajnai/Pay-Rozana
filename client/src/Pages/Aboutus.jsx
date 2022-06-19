import React from 'react'
import { useEffect } from 'react';

//Assests
// import person4 from "../Assets/person4.svg";

function ScrollToTopOnMount() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return null;
}

const Aboutus = () => {
  return (
    <>
    <ScrollToTopOnMount></ScrollToTopOnMount>
    <div className=' p-5'>
        <div className='text-center'>
    <h1 className='font-bold text-2xl p-5 mb-5'>About Us</h1>

        </div>

    <div className='font-medium text-xl w-fit bg-red-50 text-justify rounded-lg p-5 m-auto'>
        <p>
        We have created a simple interface where businesses can enter their daily <br />
        transactions, both online and cash and a billing software for businesses <br />
        <br />
        We will split the EMI into small daily payment chunks called “slice” <br />
        <br />
        We will use the daily transaction data to remind the user to pay their daily <br /> “slice”.
        <br /><br /> 
        We will use this transaction data to generate a credit score to show the bank <br /> that the user is capable of loan repayment. <br /> 
        </p>
    </div>

    <div className='text-center'>
    <h1 className='font-bold text-2xl p-5 mb-5 mt-5 '>How our idea will solve the problem ?</h1>

        </div>

    <div className='font-medium text-xl w-fit bg-red-50 text-justify rounded-lg p-5 m-auto'>
        <p>
        <p className=' font-bold underline underline-offset-1'>
        SIMPLIFYING LOAN REPAYMENTS FOR SMALL BUSINESSES <br />

        </p>
        <br />
        Daily EMI payments for small businesses will be revolutionary in the banking <br /> 
        sector and reduce the burden of repayment on small businesses <br />
        <br />
        <p className='font-bold underline underline-offset-1'>
        GIVING BANKS A RELIABLE METRIC TO LOAN CAPITAL TO SMALL BUSINESSES <br />

        </p>
        <br />
        We will generate a credit score for the businesses that the banks will use for <br />
       giving out loans. <br />
       This credit score will be generated on the basis of cash flow of that particular <br />
        business <br />
       <br />
       <p className='font-bold underline underline-offset-1'>
      REDUCING BANK NPAs <br />
        
        </p> 
Our data and credit score are reliable metrics and are difficult to tamper with,  <br />
 this will reduce the NPA’S for the bank <br />

        </p>
    </div>

    <div className='font-medium text-xl w-full bg-red-50 text-justify rounded-lg  mt-5 '>
    <div className='text-center'>
    <h1 className='font-bold text-2xl p-5 mb-5 mt-5 '>Benefits for the users</h1>

        </div>

        <div className='pl-10'>

        <ul className='list-disc p-10'>
       <li>A loan without a collateral </li> 
       <li>An easy way to pay loans daily instead of a monthly basis</li> 
           <li> EMI is paid automatically and daily thus reducing any stress or hassle</li> 
          <li> A free billing software </li>  
             <li> A free payment gateway </li>   
           <li> A free portal to understand their cash flow  </li> 

        </ul>
        </div>
    </div>

    </div>
    
    </>
  )
}

export default Aboutus;