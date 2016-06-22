import {createStore} from 'redux';
import swimCalc from '../reducers';

export default function configureStore(initialState){
    const store = createStore(swimCalc, initialState,
        window.devToolsExtension && window.devToolsExtension()
    );
    return store;
}