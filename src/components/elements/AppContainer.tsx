import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthScreen from '../screens/AuthScreen';
import TodoScreen from '../screens/TodoScreen';
import HomeScreen from '../screens/HomeScreen';
import AppContext from '../../contexts/AppContext';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import {Image, View} from 'react-native';

import homeIcon from '../../assets/images/home.png';
import notificationIcon from '../../assets/images/bell.png';
import searchIcon from '../../assets/images/search.png';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={homeIcon} style={{height: 20, width: 20}} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Image source={searchIcon} style={{height: 20, width: 20}} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          tabBarIcon: () => (
            <Image source={notificationIcon} style={{height: 20, width: 20}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TabNav() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppTabs />
    </SafeAreaView>
  );
}
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
            name="App"
            component={TabNav}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default AppContainer;
