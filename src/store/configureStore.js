import {createStore, applyMiddleware, compose} from 'redux';
import swimCalc from '../reducers';
import invariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
    const store = createStore(swimCalc, initialState, compose(
        applyMiddleware(invariant()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}