import * as React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeTab from '../assets/home-tab.svg';
import BoutiqueTab from '../assets/boutique-tab.svg';
import BrandsTab from '../assets/brands-tab.svg';
import OrdersTradesTab from '../assets/orders-trades-tab.svg';
import AccountTab from '../assets/account-tab.svg';

export const tabBarIconDecider = (props, route) => {
  const {focused} = props;
  const icons = {
    Home: <HomeTab />,
    Boutiques: <BoutiqueTab />,
    Brands: <BrandsTab />,
    OrdersTrades: <OrdersTradesTab />,
    Account: <AccountTab />,
  };
  return icons[route.name];
};

export const tabBarVisibleDecider = route => {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Initial';
  const routesWithBottomTab = [
    'Initial',
    'Home',
    'Boutiques',
    'PopularBrands',
    'AllBrands',
    'OrdersTrades',
    'Account',
  ];
  if (routesWithBottomTab.includes(routeName)) {
    return true;
  }
  return false;
};
