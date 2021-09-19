import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainApp"
        headerMode="none"
        mode="modal">
        <Stack.Screen name="MainApp" component={BottomTabNavigator} />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          // options={{
          //   header: () => <CustomHeader tickerOnly />,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
