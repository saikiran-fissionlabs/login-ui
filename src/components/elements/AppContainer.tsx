import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthScreen from '../screens/AuthScreen';
import TodoScreen from '../screens/TodoScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{header: () => null}}
        />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
