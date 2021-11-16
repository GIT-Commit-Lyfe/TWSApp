import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import ModelScreen from '../screens/ModelScreen';
import ModelSellDetailsScreen from '../screens/ModelSellDetailsScreen';
import ModelSellPhotosScreen from '../screens/ModelSellPhotosScreen';
import ModelSellAskPriceScreen from '../screens/ModelSellAskPriceScreen';
import ModelSellPreviewScreen from '../screens/ModelSellPreviewScreen';
import CameraScreen from '../screens/CameraScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen';
import ModelBuyScreen from '../screens/ModelBuy';
import ModelOrderDetailsScreen from '../screens/ModelOrderDetailsScreen';
import SuccessScreen from '../screens/SuccessScreen';
import CollectionListingsScreen from '../screens/CollectionListingsScreen.js';
import BoutiqueScreen from '../screens/BoutiqueScreen';
import BoutiquesLocationScreen from '../screens/BoutiquesLocationScreen';
import AllBrandsScreen from '../screens/AllBrandsScreen';
import PopularBrandsScreen from '../screens/PopularBrandsScreen';
import BrandDetailScreen from '../screens/BrandDetailScreen';
import CollectionDetailScreen from '../screens/CollectionDetailScreen';
import OrdersTradesScreen from '../screens/OrdersTradesScreen';
import AccountScreen from '../screens/AccountScreen';
import {tabBarVisibleDecider} from '../utils/navConfigs';
import {CustomHeader} from '../components/CustomHeaders';

const Stack = createStackNavigator();

export function HomeStack({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: tabBarVisibleDecider(route)});
  }, [navigation, route]);

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader tickerOnly />,
        }}
      />
      {commonScreens.map(screen => {
        const {name, component, options} = screen;
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export function BoutiqueStack({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: tabBarVisibleDecider(route)});
  }, [navigation, route]);

  return (
    <Stack.Navigator initialRouteName="Boutiques" headerMode="screen">
      <Stack.Screen
        name="Boutiques"
        component={BoutiquesLocationScreen}
        options={{
          header: () => <CustomHeader title="Boutiques" withoutBack />,
        }}
      />
      <Stack.Screen
        name="Boutique"
        component={BoutiqueScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      {commonScreens.map(screen => {
        const {name, component, options} = screen;
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export function BrandsStack({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: tabBarVisibleDecider(route)});
  }, [navigation, route]);

  return (
    <Stack.Navigator initialRouteName="PopularBrands" headerMode="screen">
      <Stack.Screen
        name="PopularBrands"
        component={PopularBrandsScreen}
        options={{
          header: () => <CustomHeader withoutBack />,
        }}
      />
      <Stack.Screen
        name="AllBrands"
        component={AllBrandsScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen
        name="BrandDetail"
        component={BrandDetailScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      {commonScreens.map(screen => {
        const {name, component, options} = screen;
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export function OrdersTradesStack() {
  return (
    <Stack.Navigator initialRouteName="OrdersTrades" headerMode="screen">
      <Stack.Screen
        name="OrdersTrades"
        component={OrdersTradesScreen}
        options={{
          header: () => (
            <CustomHeader
              title="Orders and Trades"
              withoutBack
              withoutShare
              withoutTicker
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function AccountStack() {
  return (
    <Stack.Navigator initialRouteName="Account" headerMode="screen">
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          header: () => (
            <CustomHeader
              title="Account"
              withoutBack
              withoutShare
              withoutTicker
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const commonScreens = [
  {
    name: 'CollectionDetail',
    component: CollectionDetailScreen,
    options: {header: () => <CustomHeader />},
  },
  {
    name: 'CollectionListings',
    component: CollectionListingsScreen,
    options: {header: () => <CustomHeader title="Listings" withWatchlist />},
  },
  {
    name: 'ListingDetail',
    component: ListingDetailScreen,
    options: {header: () => <CustomHeader />},
  },
  {
    name: 'Model',
    component: ModelScreen,
    options: {header: () => <CustomHeader withWatchlist />},
  },
  {
    name: 'ModelSellDetails',
    component: ModelSellDetailsScreen,
    options: {
      header: () => <CustomHeader title="Sell:" subtitle="(RLX)126710BNLRO" />,
    },
  },
  {
    name: 'ModelSellPhotos',
    component: ModelSellPhotosScreen,
    options: {
      header: () => <CustomHeader title="Sell:" subtitle="(RLX)126710BNLRO" />,
    },
  },
  {
    name: 'Camera',
    component: CameraScreen,
    options: {
      header: () => <CustomHeader />,
    },
  },
  {
    name: 'ModelSellAskPrice',
    component: ModelSellAskPriceScreen,
    options: {
      header: () => <CustomHeader title="Sell:" subtitle="(RLX)126710BNLRO" />,
    },
  },
  {
    name: 'ModelSellPreview',
    component: ModelSellPreviewScreen,
    options: {
      header: () => <CustomHeader title="Sell:" subtitle="(RLX)126710BNLRO" />,
    },
  },
  {
    name: 'PaymentMethods',
    component: PaymentMethodsScreen,
    options: {
      header: () => <CustomHeader title="Add Payment Method" />,
    },
  },
  {
    name: 'ModelBuy',
    component: ModelBuyScreen,
    options: {
      header: () => (
        <CustomHeader title="Buy:" subtitle="(RLX)126710BNLRO" withWatchlist />
      ),
    },
  },
  {
    name: 'ModelOrderDetails',
    component: ModelOrderDetailsScreen,
    options: {
      header: () => <CustomHeader title="Review" />,
    },
  },
  {
    name: 'Success',
    component: SuccessScreen,
    options: {
      header: () => <CustomHeader title="Review" />,
    },
  },
];
