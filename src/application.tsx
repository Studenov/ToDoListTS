import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { store, persistor, history } from './store';
import { NavigatorConnect } from './components/navigation/navigator';
import { GlobalStyles } from './components/styled-components/index';

export const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <NavigatorConnect />
          <GlobalStyles />
        </React.Fragment>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
