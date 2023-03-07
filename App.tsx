import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calculator from './src/screens/Calculator';
import Login from './src/screens/Login/Login';
import {StackPageType} from './src/screens/page.type';
import { RootState } from './src/redux/store';
import { Button } from 'react-native';
import { logout } from './src/redux/slices/counter.slice';
import { authAction } from './src/redux/slices/auth.slice';

const Stack = createNativeStackNavigator<StackPageType>();
export default function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  function loggedout(): void {
    dispatch(authAction.logoutTrigger())
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {isAuthenticated 
            ? <Stack.Screen name="Calculator" options={{
              headerRight: () => (
                <Button
                  onPress={() => loggedout()}
                  title="logout"
                  color="#555"
                />
              ),
            }} component={Calculator} />
            : <Stack.Screen name="Login" options={{ headerShown: false }}  component={Login}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}