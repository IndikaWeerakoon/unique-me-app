/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Amplify } from 'aws-amplify';
import {PersistGate} from 'redux-persist/integration/react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { View } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store, persistor } from './src/redux/store';

import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const LoadingMarkup = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator animating={true} size='large' color={MD2Colors.red900} />
    </View>
  );

const ReduxProvider = () => {
    return(
        <Provider store={store}>
            <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
              <PaperProvider theme={theme} settings={{ icon: props => <AwesomeIcon {...props} />,}}>
                <App />
              </PaperProvider>
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxProvider);
