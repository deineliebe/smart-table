import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider, Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, BrowserRouter as RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import App from './app/app';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);