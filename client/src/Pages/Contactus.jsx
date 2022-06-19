import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';

//Assests
import person4 from "../Assets/person4.svg";
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