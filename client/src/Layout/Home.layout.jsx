import React from 'react';

// component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = (props) => {
    return (
        <div className='mb-5'>
            <Navbar className='w-full' />
            {props.children}
            <Footer className='w-full position: fixed bottom: 0px'></Footer>
        </div>
    );
};

export default HomeLayout;