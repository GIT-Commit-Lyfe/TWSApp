import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../constants/colors';

import {tabBarIconDecider, tabBarVisibleDecider} from '../utils/navConfigs';
import {
  AccountStack,
  BoutiqueStack,
  BrandsStack,
  HomeStack,
  OrdersTradesStack,
} from './NavigationStacks';

const Tab = createBottomTabNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => {
          return {
            tabBarIcon: props => tabBarIconDecider(props, route),
          };
        }}
        tabBarOptions={{
          activeTintColor: colors.primary,
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{unmountOnBlur: true}}
          listeners={({navigation, route}) => ({
            blur: () => navigation.setParams({screen: undefined}),
            tabPress: e => {
              // force navigation to Home
              e.preventDefault();
              navigation.navigate('Home');
            },
          })}
        />
        <Tab.Screen
          name="Boutiques"
          component={BoutiqueStack}
          options={{unmountOnBlur: true}}
        />
        <Tab.Screen
          name="Brands"
          component={BrandsStack}
          options={{unmountOnBlur: true}}
        />
        <Tab.Screen
          name="OrdersTrades"
          component={OrdersTradesStack}
          options={{unmountOnBlur: true}}
        />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{unmountOnBlur: true}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
