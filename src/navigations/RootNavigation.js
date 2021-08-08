import 'react-native-gesture-handler';
import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import ModelScreen from '../screens/ModelScreen';
import BoutiqueScreen from '../screens/BoutiqueScreen';
import BoutiquesLocationScreen from '../screens/BoutiquesLocationScreen';
import AllBrandsScreen from '../screens/AllBrandsScreen';
import PopularBrandsScreen from '../screens/PopularBrandsScreen';
import OrdersTradesScreen from '../screens/OrdersTradesScreen';
import AccountScreen from '../screens/AccountScreen';
import BrandDetailScreen from '../screens/BrandDetailScreen';
import CollectionDetailScreen from '../screens/CollectionDetailScreen';
import CollectionListingsScreen from '../screens/CollectionListingsScreen.js';
import {Jost400} from '../components/StyledText';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import HomeTab from '../assets/home-tab.svg';
import BoutiqueTab from '../assets/boutique-tab.svg';
import BrandsTab from '../assets/brands-tab.svg';
import OrdersTradesTab from '../assets/orders-trades-tab.svg';
import AccountTab from '../assets/account-tab.svg';
import ModelSellDetailsScreen from '../screens/ModelSellDetailsScreen';
import ModelSellPhotosScreen from '../screens/ModelSellPhotosScreen';
import ModelSellAskPriceScreen from '../screens/ModelSellAskPriceScreen';
import ModelSellPreviewScreen from '../screens/ModelSellPreviewScreen';
import CameraScreen from '../screens/CameraScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen';
import ModelBuyScreen from '../screens/ModelBuy';
import ModelOrderDetailsScreen from '../screens/ModelOrderDetailsScreen';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const icons = {
              Home: <HomeTab />,
              Boutiques: <BoutiqueTab />,
              Brands: <BrandsTab />,
              OrdersTrades: <OrdersTradesTab />,
              Account: <AccountTab />,
            };
            return icons[route.name];
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.primary,
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{title: 'Home'}}
        />
        <Tab.Screen name="Boutiques" component={BoutiqueStack} />
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
      <Stack.Screen name="ListingDetail" component={ListingDetailScreen} />
      <Stack.Screen name="Model" component={ModelScreen} />
      <Stack.Screen
        name="ModelSellDetails"
        component={ModelSellDetailsScreen}
      />
      <Stack.Screen name="ModelSellPhotos" component={ModelSellPhotosScreen} />
      <Stack.Screen
        name="ModelSellAskPrice"
        component={ModelSellAskPriceScreen}
      />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen
        name="ModelSellPreview"
        component={ModelSellPreviewScreen}
      />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />

      <Stack.Screen name="ModelBuy" component={ModelBuyScreen} />
      <Stack.Screen
        name="ModelOrderDetails"
        component={ModelOrderDetailsScreen}
      />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen
        name="CollectionListings"
        component={CollectionListingsScreen}
      />
    </Stack.Navigator>
  );
}
function BoutiqueStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Boutiques" component={BoutiquesLocationScreen} />
      <Stack.Screen name="Boutique" component={BoutiqueScreen} />
    </Stack.Navigator>
  );
}
function BrandsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PopularBrands" component={PopularBrandsScreen} />
      <Stack.Screen name="AllBrands" component={AllBrandsScreen} />
      <Stack.Screen name="BrandDetail" component={BrandDetailScreen} />
      <Stack.Screen
        name="CollectionDetail"
        component={CollectionDetailScreen}
      />
      <Stack.Screen
        name="CollectionListings"
        component={CollectionListingsScreen}
      />
    </Stack.Navigator>
  );
}
function OrdersTradesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OrdersTrades" component={OrdersTradesScreen} />
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
