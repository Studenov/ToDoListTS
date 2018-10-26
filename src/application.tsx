import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { store, persistor, history } from './store';
import { NavigatorConnect } from './components/navigation/navigator';

export const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <NavigatorConnect />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
