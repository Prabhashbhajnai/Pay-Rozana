import React from 'react';

// component
import ContactUsNavbar from '../components/Navbar/ContactUsNavbar';
import Footer from '../components/Footer';


const DashboardLayout = (props) => {
    return (
        <div className=''>
            
            {/* Gray Corner triangle */}
            <div className='hidden lg:block w-3/4 h-96 overflow-hidden bg-slate-400 md:-skew-y-19 -translate-y-62 absolute -z-50' />

            <ContactUsNavbar className='w-full relative' />


            {props.children}
            <Footer className='w-full bottom-0' />

        </div>
    );
};

export default DashboardLayout;