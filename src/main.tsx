import React from 'react';
import ReactDOM from 'react-dom/client';

import '@styles/styles.css';

import { Provider } from 'react-redux';
import store from '@stores/store';

import { RouterProvider } from 'react-router-dom';
import router from '@routes/router';

import '@utils/axios.config';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
