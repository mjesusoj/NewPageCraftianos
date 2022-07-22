import { combineReducers } from 'redux';
import { pathReducer } from './pathReducer';

import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    path: pathReducer
})