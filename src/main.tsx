import { CssBaseline, CssVarsProvider } from '@mui/joy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider>
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
