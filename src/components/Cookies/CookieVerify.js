import React from 'react';
import { useSelector } from 'react-redux';

import { CookieScreen } from './CookieScreen';
import { Footer } from '../ui/Footer';

export const CookieVerify = () => {
    const { cookies } = useSelector(state => state.ui);

    const cookiesLocal = localStorage.getItem('cookies')

    // ERROR: possible is a condition
    if ( cookies !== cookiesLocal ) {
        return <Footer />
    }

    return <CookieScreen />
}