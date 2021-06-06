import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BoutiqueScreen from '../screens/BoutiqueScreen';
import BrandsScreen from '../screens/BrandsScreen';
import OrdersTradesScreen from '../screens/OrdersTradesScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Boutique" component={BoutiqueStack} />
        <Tab.Screen name="Brands" component={BrandsStack} />
        <Tab.Screen name="OrdersTrades" component={OrdersTradesStack} />
        <Tab.Screen name="Account" component={AccountStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function BoutiqueStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Boutique" component={BoutiqueScreen} />
    </Stack.Navigator>
  );
}
function BrandsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Brands" component={BrandsScreen} />
    </Stack.Navigator>
  );
}
function OrdersTradesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={OrdersTradesScreen} />
    </Stack.Navigator>
  );
}
function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
