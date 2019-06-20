/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
import createSagaMiddware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddware();

export const store = createStore(allReducers, applyMiddleware(sagaMiddleware))
const AppRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
)
sagaMiddleware.run(rootSaga)

AppRegistry.registerComponent(appName, () => AppRedux);
