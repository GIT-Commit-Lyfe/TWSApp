import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PriceTrendCarousel} from '../components/Carousels';

export const Watches = () => {
  const data = [
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
  ];
  return (
    <View>
      <PriceTrendCarousel title="My Watchlist" data={data} />
    </View>
  );
};
export const Boutiques = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <Text>Ini Boutiques</Text>
    </View>
  );
};
export const Straps = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <Text>Ini Straps</Text>
    </View>
  );
};
export const Buckles = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <Text>Ini Buckles</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
