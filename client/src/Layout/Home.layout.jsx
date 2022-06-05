import React from 'react';

// component
import Navbar from '../components/Navbar';

const HomeLayout = (props) => {
    return (
        <div className='mb-5'>
            <Navbar className='w-full' />
            {props.children}
        </div>
    );
};

export default HomeLayout;