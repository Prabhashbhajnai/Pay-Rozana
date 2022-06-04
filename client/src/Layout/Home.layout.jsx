import React from 'react';

// component
import Navbar from '../components/Navbar';

const HomeLayout = (props) => {
    return (
        <div>
            <Navbar />
            Home Layout{props.children}
        </div>
    );
};

export default HomeLayout;