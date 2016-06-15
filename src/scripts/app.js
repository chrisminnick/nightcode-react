import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from '../containers/PageContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import testreducer from '../reducers/testreducer';

const store = createStore(testreducer);

ReactDOM.render(<Provider store={store}><PageContainer /></Provider>,
    document.getElementById('app'));