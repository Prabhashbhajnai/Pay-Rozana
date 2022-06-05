import React from 'react';
import { Route } from "react-router-dom";

// Layout
import SignUpLayout from '../Layout/SignUp.layout';

const SignUpLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <SignUpLayout>
                        <Component {...props} />
                    </SignUpLayout>
                )}
            />
        </>
    );
};

export default SignUpLayoutHOC;