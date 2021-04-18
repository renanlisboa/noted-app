import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <ToastContainer autoClose={2000} />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
