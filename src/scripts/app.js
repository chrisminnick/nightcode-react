import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import swimCalc from '../reducers';

function configureStore(initialState) {
    const store = createStore(swimCalc, initialState,
        window.devToolsExtension && window.devToolsExtension()
    );
    return store;
}

let store = configureStore();

import PageContainer from '../containers/PageContainer';

const render = () => {
    ReactDOM.render(<Provider store={store}>
            <PageContainer/>
        </Provider>,
        document.getElementById('app'));
};


store.subscribe(render);
render();