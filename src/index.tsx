import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "./style/_index.scss";
import "./i18n";
import App from './App.connector';
import reducersApp from "./reducers";
import { createStore } from "redux";
import * as serviceWorker from './serviceWorker';

const reducersAppStore = createStore(reducersApp);

ReactDOM.render(
    <Provider store={reducersAppStore}>
        <Suspense fallback={"Load.."}>
            <App />
        </Suspense>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
