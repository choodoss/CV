import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LangProvider from './hooks/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter basename='/cv'>
        <App />
      </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
);