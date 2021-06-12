import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PriceTrendCarousel} from '../components/Carousels';
import {Jost600} from '../components/StyledText';
import colors from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <PriceTrendCarousel title="Popular Models" data={data} />
      <Footer />
    </View>
  );
};

const Footer = () => {
  return (
    <View
      style={{
        height: 250,
        paddingLeft: 28,
        paddingRight: 48,
        paddingTop: 18,
        backgroundColor: colors.primary,
      }}>
      <Jost600 style={{fontSize: 36, color: 'white'}}>
        Are you new to watch game?
      </Jost600>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Ionicons name="logo-instagram" size={27} color="white" />
        <Jost600 style={{fontSize: 18, color: 'white', marginLeft: 10}}>
          Follow us to step up your game
        </Jost600>
      </View>
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
