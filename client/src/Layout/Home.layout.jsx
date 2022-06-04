import React from 'react';

// component
import Navbar from '../components/Navbar';

const HomeLayout = (props) => {
    return (
        <div>
            <Navbar className='w-full' />
            {props.children}
        </div>
    );
};

export default HomeLayout;