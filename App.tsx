import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {colorModeManager, theme} from './src/utils/theme';
import {Provider} from 'react-redux';
import {persistor, store} from './src/rtk/app/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './src/routes/RootNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
          <RootNavigation />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
