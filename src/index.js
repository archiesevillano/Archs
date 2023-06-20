import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppTheme from './AppTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppTheme>
      <App />
    </AppTheme>
);
