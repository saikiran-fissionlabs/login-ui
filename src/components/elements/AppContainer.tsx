import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthScreen from '../screens/AuthScreen';
import TodoScreen from '../screens/TodoScreen';
import HomeScreen from '../screens/HomeScreen';
import AppContext from '../../contexts/AppContext';

const Stack = createNativeStackNavigator();

function AppContainer() {
  const [user, setUser] = React.useState();
  return (
    <AppContext.Provider value={{user, setUser}}>
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
    </AppContext.Provider>
  );
}

export default AppContainer;
