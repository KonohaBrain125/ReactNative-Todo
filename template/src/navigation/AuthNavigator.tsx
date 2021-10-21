import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from 'screens';

export type AuthStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
