import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { ThemeProvider } from './contexts/ThemeContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
