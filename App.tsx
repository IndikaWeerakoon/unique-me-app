import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './src/screens/Login/Login';
import {StackPageType} from './src/screens/page.type';
import { RootState } from './src/redux/store';
import { Button } from 'react-native';
import { authAction } from './src/redux/slices/auth.slice';
import UserNavigation from './src/screens/UserNavigation';

const Stack = createNativeStackNavigator<StackPageType>();
export default function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {isAuthenticated 
            ? <Stack.Screen name="UserNavigation"  options={{ headerShown: false }} component={UserNavigation} />
            : <Stack.Screen name="Login" options={{ headerShown: false }}  component={Login}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}