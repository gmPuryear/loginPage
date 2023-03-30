import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import { AuthProvider } from 'react-auth-kit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
        authType={'cookie'}
        authName={'_auth'}
        cookieDomain={'window.location.hostname'}
        cookieSecure={false}
        />

        {/*"BrowserRouter" provides information in routing to all components to make everything work*/}
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
