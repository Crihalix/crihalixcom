import React from 'react';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, data, ...rest }) {
    return (
        <Route {...rest} render={
            props => (
                <Component data={data} {...props} />
            )
        } />
    );
}

export default PrivateRoute;