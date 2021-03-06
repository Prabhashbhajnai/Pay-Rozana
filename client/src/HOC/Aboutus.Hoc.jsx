import React from 'react';
import { Route } from "react-router-dom";

// Layout
import AboutusLayout from '../Layout/Aboutus.Layout';

const AboutusLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <AboutusLayout>
                        <Component {...props} />
                    </AboutusLayout>
                )}
            />
        </>
    );
};

export default AboutusLayoutHOC;