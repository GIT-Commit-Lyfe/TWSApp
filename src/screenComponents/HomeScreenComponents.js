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
      modelUrl: 'https://dummy.com/dummy.jpeg',
    },
    {
      reference: '5711A',
      significantEdition: 'Olive Green',
      collection: 'Nautilus',
      marketPrice: 99850,
      currency: 'EUR',
      raising: true,
      modelUrl: 'https://dummy.com/dummy1.jpeg',
    },
  ];
  return (
    <View style={{paddingHorizontal: 10}}>
      <PriceTrendCarousel title="My Watchlist" />
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
