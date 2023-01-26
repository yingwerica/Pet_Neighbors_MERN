import React from 'react';
import ReactDOM from 'react-dom';

//////initialize Redux
//keep track the store. so we can access global state(store) from anywhere inside the application
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
//allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
//Thunks are a standard approach for writing async logic in Redux apps, and are commonly used for data fetching
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

//set up Redux store
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)