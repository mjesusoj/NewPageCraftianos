import React from 'react';
import { useDispatch } from 'react-redux';
import { uiCookiesTrue } from '../../actions/ui';

export const CookieScreen = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        // Dispatch of the action cookiesTrue | cookiesAccepted
        dispatch( uiCookiesTrue() );
        localStorage.setItem('cookies', true);
    }

    return (
        <>
            <div className="col-12">
                <div className="alert alert-warning alert-dismissible fade show" id="alertCookies" role="alert">
                    Esta página utiliza cookies, aceptalas pulsando en el botón de la derecha.
                    <button type="button" className="btn-close" 
                        data-bs-dismiss="alert" aria-label="Close" onClick={ handleClick }></button>
                    <div id="cookies"></div>
                </div>
            </div>
        </>
    )
}
