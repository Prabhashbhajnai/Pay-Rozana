import React from 'react';
import { Route } from "react-router-dom";

// Layout
import ContactusLayout from '../Layout/Contactus.Layout';

const ContactusLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <ContactusLayout>
                        <Component {...props} />
                    </ContactusLayout>
                )}
            />
        </>
    );
};

export default ContactusLayoutHOC;