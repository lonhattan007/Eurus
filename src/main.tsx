import React from 'react';
import ReactDOM from 'react-dom/client';

import '@styles/styles.scss';
import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
