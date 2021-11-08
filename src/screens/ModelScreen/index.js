import React, {useRef} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import {get} from 'lodash';

import Accesories from './Accesories';
import BuyAndSell from './BuyAndSell';
import ModelDetail from './ModelDetail';
import SignificantEditions from './SignificantEditions';
import styles from './styles';

import {PriceGraph} from '../../components/Graphs';
import {SimpleList} from '../../components/Lists';
import {ListingCarousel} from '../../components/Carousels';

import {Jost600} from '../../components/StyledText';
import MarketDataModal from '../../components/MarketDataModal';
import BottomSheet from '../../components/BottomSheet';

import {formatCurrency} from '../../utils/tools';
import useWatchlist from '../../customHooks/useWatchlist';
import {DualButton} from '../../components/Buttons';

const followedListings = [
  {
    brand: 'Rolex',
    code: 'RLX',
    SECode: '',
    reference: '126710BLRO',
    significantEdition: 'BATMAN',
    collection: 'GMT Master II',
    year: '2016',
    price: 13350,
    currency: 'EUR',
    condition: 'Very Good',
    accomodation: 'With Original Papers',
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    modelUrl: 'https://via.placeholder.com/150.png',
  },
  {
    brand: 'Rolex',
    code: 'RLX',
    SECode: 'F4',
    reference: '16610LV',
    significantEdition: 'KERMIT FLAT 4',
    collection: 'Submariner Date',
    year: '2004',
    price: 17900,
    currency: 'EUR',
    condition: 'Fair',
    accomodation: 'Full Set',
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    modelUrl: 'https://via.placeholder.com/150.png',
  },
  {
    brand: 'Rolex',
    code: 'RLX',
    SECode: 'F4',
    reference: '16610LV',
    significantEdition: 'KERMIT FLAT 4',
    collection: 'Submariner Date',
    year: '2004',
    price: 13350,
    currency: 'EUR',
    condition: 'Fair',
    accomodation: 'Full Set',
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    modelUrl: 'https://via.placeholder.com/150.png',
  },
];

export default function ModelScreen({navigation, route}) {
  const {item} = get(route, 'params');
  const {addWatchList, removeWatchList, data: watchlist} = useWatchlist();

  const {brand = 'Rolex', collection, reference} = item;

  const marketDataRef = useRef();
  const openMarketData = () => marketDataRef.current.open();

  const isInWatchlist = watchlist.filter(
    item => item.reference === reference,
  ).length;

  const addToWatchlist = async () => {
    try {
      if (isInWatchlist) {
        await removeWatchList(item);
        Toast.show({
          type: 'success',
          text1: `${brand} ${collection}`,
          text2: 'Removed from watchlist',
          position: 'top',
          visibilityTime: 2000,
        });
      } else {
        await addWatchList(item);
        Toast.show({
          type: 'success',
          text1: `${brand} ${collection}`,
          text2: 'Added to watchlist',
          position: 'top',
          visibilityTime: 2000,
        });
      }
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.modelScreenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.horizontalPadding}>
          <ModelDetail data={item} />
        </View>
        <SignificantEditions />
        <View style={styles.horizontalPadding}>
          <PriceGraph title="Price History" />
        </View>
        <DualButton
          textLeft={
            isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'
          }
          onPressLeft={addToWatchlist}
          textRight="View Market Data"
          onPressRight={openMarketData}
          containerStyle={styles.buttonContainer}
        />
        <SimpleList
          title="Model Analytics"
          items={[
            {
              label: '52 Week High',
              value: formatCurrency(14360),
            },
            {label: '52 Week Low', value: formatCurrency(12950)},
            {
              label: 'Trade Range',
              value: `${formatCurrency(13000)} - ${formatCurrency(16350)}`,
            },
            {label: 'Median Price', value: formatCurrency(14150)},
            {label: 'Volatility', value: '8%'},
            {label: 'YTD Gain', value: '19%'},
          ]}
        />
        <View style={styles.separator} />
        <ListingCarousel
          title="Most Popular Around You"
          data={followedListings}
          navigation={navigation}
        />
      </ScrollView>
      <BottomSheet ref={marketDataRef} title={item.brand} subtitle="(RLX)">
        <MarketDataModal />
      </BottomSheet>

      <BuyAndSell />
    </SafeAreaView>
  );
}
