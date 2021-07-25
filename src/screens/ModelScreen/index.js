import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Accesories from './Accesories';
import BuyAndSell from './BuyAndSell';
import ModelDetail from './ModelDetail';
import SignificantEditions from './SignificantEditions';

import {PriceGraph} from '../../components/Graphs';
import {SimpleList} from '../../components/Lists';
import {ListingCarousel} from '../../components/Carousels';

import {formatCurrency} from '../../utils/tools';

import styles from './styles';

export default function ModelScreen() {
  const navigation = useNavigation();

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

  return (
    <SafeAreaView style={styles.modelScreenContainer}>
      <ScrollView style={styles.scrollViewContainner}>
        <ModelDetail />
        <SignificantEditions />
        <PriceGraph title="Price History" />
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
        <ListingCarousel
          title="Most Popular Around You"
          data={followedListings}
          navigation={navigation}
        />
        <Accesories />
      </ScrollView>
      <BuyAndSell />
    </SafeAreaView>
  );
}
