import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './contexts/AuthContext';
import Router from './routes';

import '@/assets/styles/global.css';
import '@fontsource/ubuntu/latin.css';

const element = document.getElementById('root')!;

ReactDOM.createRoot(element).render(
    <React.StrictMode>
        <AuthProvider>
            <Router />
        </AuthProvider>
    </React.StrictMode>,
);
