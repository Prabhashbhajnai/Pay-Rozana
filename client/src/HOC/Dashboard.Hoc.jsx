import React from 'react';
import { Route } from "react-router-dom";

// Layout
import DashboardLayout from '../Layout/Dashboard.layout';

const DashboardLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <DashboardLayout>
                        <Component {...props} />
                    </DashboardLayout>
                )}
            />
        </>
    );
};

export default DashboardLayoutHOC;