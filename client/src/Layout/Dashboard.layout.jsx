import React from 'react';

// component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DashboardLayout = (props) => {
    return (
        <div className=''>
            <Navbar className='w-full' />
            {props.children}
            <Footer className='w-full'/>

        </div>
    );
};

export default DashboardLayout;