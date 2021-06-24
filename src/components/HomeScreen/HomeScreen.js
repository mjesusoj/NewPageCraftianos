import React from 'react';
import { Header } from '../Header/Header';
import { Article } from './Article';

import { CookieVerify } from '../Cookies/CookieVerify';

export const HomeScreen = () => {
    
    /* const { location } = useHistory();
    const path = location.pathname; */

    /* const { component } = useSelector(state => state.path); */
    
    return (
        <>
            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>
            {
                <Article />
            }
            <div className="p-3 mt-5 bg-dark text-dark row">
            {
                <CookieVerify />
            }
            </div>
        </>
    )
}
