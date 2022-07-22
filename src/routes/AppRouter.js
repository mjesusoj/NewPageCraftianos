import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { HomeRoute } from './HomeRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container-fluid">
                <HomeRoute
                    path="/"
                    component={ HomeRoute }
                />
            </div>
        </Router>
    )
}