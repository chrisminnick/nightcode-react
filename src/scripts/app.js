import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PageContainer from '../containers/PageContainer';
import configureStore from '../store/configureStore';



let store = configureStore();


ReactDOM.render(<Provider store={store}>
                        <PageContainer/>
                    </Provider>,
        document.getElementById('app'));

/*

store.subscribe(render);
render();*/
