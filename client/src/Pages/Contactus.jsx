import React from 'react'
import { useEffect } from 'react';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Contactus = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <div className='w-full mt-11'>
        <div className='w-full text-center'>
          <h1 className='text-3xl font-semibold'>Get in touch with us!</h1>
        </div>

        <div className='flex flex-col justify-center'>
          <div className='md:flex justify-center gap-24 mt-10'>
            <div className='text-center'>
              <h1 className='text-lg font-semibold'>Your Name</h1>
              <input required type="text" placeholder='John Doe' className='shadow-xl border-2 rounded-lg w-96 h-10 text-center' />
            </div>
            <div className='text-center mt-3'>
              <h1 className='text-lg font-semibold'>Your Email</h1>
              <input required type="email" placeholder='johndoe@email.com' className='shadow-xl border-2 rounded-lg w-96 h-10 text-center' />
            </div>
          </div>

          <div className='md:hidden text-center mt-3'>
            <h1 className='text-lg font-semibold'>Your Message</h1>
            <textarea rows="5" cols="49" placeholder='Type Message' className='shadow-xl border-2 rounded-lg text-center' />
          </div>
          <div className='hidden md:block text-center mt-6'>
            <h1 className='text-lg font-semibold'>Your Message</h1>
            <textarea rows="18" cols="115" placeholder='Type Message' className='shadow-xl border-2 rounded-lg text-center m-5' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Contactus;