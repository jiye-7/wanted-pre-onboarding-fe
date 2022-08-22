import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './redux/reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware)));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
);

reportWebVitals();
