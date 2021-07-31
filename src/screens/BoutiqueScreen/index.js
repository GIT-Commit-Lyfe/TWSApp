import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Boutique from './Boutique';
import WatchListing from './WatchListing';

export default function BoutiqueScreen() {
  const boutiqueMock = {
    id: 1,
    avatar: 'https://via.placeholder.com/100',
    boutiqueName: 'Rolex Collections',
    description: 'Welcome to our boutique, we serve you at best',
    address: 'Berlin',
    fullAddress: 'Berlin, Germany',
    longitude: 58.1233235234,
    latitude: 12.123124234,
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <WatchListing
        ListHeaderComponent={<Boutique boutique={boutiqueMock} />}
      />
    </SafeAreaView>
  );
}
