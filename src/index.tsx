//Packages
import * as React from 'react';
//@ts-ignore
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Application
import * as serviceWorker from './serviceWorker';

//Components
import App from './App';

//Resources
import store from './store';

//Styles
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
