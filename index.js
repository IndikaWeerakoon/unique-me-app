/**
 * @format
 */

import {AppRegistry, ActivityIndicator} from 'react-native';
import { Provider } from 'react-redux';
import { Amplify } from 'aws-amplify';
import {PersistGate} from 'redux-persist/integration/react';
import { View } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store, persistor } from './src/redux/store';

import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

const LoadingMarkup = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#4C0309" />
    </View>
  );

const ReduxProvider = () => {
    return(
        <Provider store={store}>
            <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxProvider);
