import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';

import { init } from "@aptabase/web";
init("A-EU-1480154143");

export const CraftianosMoney = () => {  
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
