import React from 'react';
import { Route } from "react-router-dom";

// Layout
import LoginLayout from '../Layout/Login.layout';

const LoginLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <LoginLayout>
                        <Component {...props} />
                    </LoginLayout>
                )}
            />
        </>
    );
};

export default LoginLayoutHOC;