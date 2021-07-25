import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../constants/colors';
import GreenArrow from '../assets/arrow-up.svg';
import {FilterSortModalButton} from './Buttons';
import {CollectionList, WatchList} from './Lists';

export default function WatchlistModal({}) {
  const watchlist = [
    {
      reference: '126710BLRO',
      significantEdition: 'GMT Pepsi',
      collection: 'GMT Master II',
      marketPrice: 13350,
      currency: 'EUR',
      raising: true,
      modelUrl: 'https://via.placeholder.com/120.png',
    },
    {
      reference: '5711A',
      significantEdition: 'Olive Green',
      collection: 'Nautilus',
      marketPrice: 99850,
      currency: 'EUR',
      raising: true,
      modelUrl: 'https://via.placeholder.com/120.png',
    },
    {
      reference: '5711A',
      significantEdition: 'Olive Green',
      collection: 'Nautilus',
      marketPrice: 99850,
      currency: 'EUR',
      raising: true,
      modelUrl: 'https://via.placeholder.com/120.png',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <WatchList data={watchlist} />
      <FilterSortModalButton />
    </SafeAreaView>
  );
}
