import React from 'react'
import { useEffect } from 'react';

//Assests
import { FiPhoneCall } from 'react-icons/fi';

function ScrollToTopOnMount() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return null;
}



const Contactus = () => {
  return (
    <>

        <div className=''>
        
        </div>
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <FiPhoneCall></FiPhoneCall>
      
    </>
  )
}

export default Contactus;