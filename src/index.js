import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*"BrowserRouter" provides information in routing to all components to make everything work*/}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
