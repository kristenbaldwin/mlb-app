import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

ReactDOM.render(
    <Provider store={StoreInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
