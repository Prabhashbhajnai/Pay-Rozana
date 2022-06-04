import React from 'react';

// component
import Navbar from '../components/Navbar';

const LoginLayout = (props) => {
    return (
        <div>
            <Navbar className='w-full' />
            {props.children} 
           
        </div>
    );
};

export default LoginLayout;