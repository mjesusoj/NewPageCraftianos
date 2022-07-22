import React from 'react';
import { NavBar } from './NavBar';

export const Header = () => {

    return (
        <>
            <div className="col-12 col-md-4 mt-3">
                <p className="h1 text-primary ml-2">Blog de Craftianos</p>
            </div>
            <div className="col-12 col-md-8 mt-3">
                <NavBar />
            </div>
        </>
    )
}
