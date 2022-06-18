import React from 'react';

// component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUpLayout = (props) => {
    return (
        <div>
            <Navbar className='w-full' />
            {props.children} 
            <Footer className='w-full'></Footer>
           
        </div>
    );
};

export default SignUpLayout;