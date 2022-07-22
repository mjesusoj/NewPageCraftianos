import { types } from '../types/types';

const initialState = {
    cookies: false
}

export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiCookiesTrue:
            return {
                ...state,
                cookies: true
            }

        default:
            return state;
    }
}