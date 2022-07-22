import { types } from '../types/types';

const initialState = {
    path: '/',
    component: 'HomeScreen'
}

export const pathReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.pathAboutScreen:
            return {
                ...state,
                path: '/sobre-mi',
                component: 'AboutScreen'
            }
        
        default:
            return state;
    }
}