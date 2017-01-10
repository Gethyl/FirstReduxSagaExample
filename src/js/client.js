import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'

import allReducers from './reducers/allReducers'
import rootSaga from './sagas/sagas'
import Layout from "./components/Layout";

const app = document.getElementById('app')

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>
	, app);

