import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
        authType={'cookie'}
        authName={'_auth'} // naming the cookie
        cookieSecure={false}
        >
        {/*"BrowserRouter" provides information in routing to all components to make everything work*/}
        <BrowserRouter>
                <App/>
        </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);
