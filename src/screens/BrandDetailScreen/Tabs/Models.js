import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {PriceTrendCarousel} from '../../../components/Carousels';
import {figmaHeight} from '../../../utils/tools';

const Models = () => {
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

  const navigation = useNavigation();

  return (
    <View>
      <PriceTrendCarousel
        title="GMT Master II Collection"
        data={watchlist}
        navigation={navigation}
      />
      <PriceTrendCarousel
        title="GMT Master II Collection"
        data={watchlist}
        navigation={navigation}
      />
      <PriceTrendCarousel
        title="GMT Master II Collection"
        data={watchlist}
        navigation={navigation}
      />
    </View>
  );
};

export default Models;

const styles = StyleSheet.create({});
