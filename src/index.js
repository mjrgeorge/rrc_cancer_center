import { CssBaseline, LinearProgress } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import Store from './redux/Store';

// REDUX STORE INTEGRATION
const store = Store();

ReactDOM.render(
    <React.Suspense fallback={<LinearProgress color="error" />}>
        <React.StrictMode>
            <BrowserRouter>
                <CssBaseline />
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    </React.Suspense>,
    document.getElementById('root')
);
