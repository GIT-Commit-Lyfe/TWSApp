import React from 'react';
import {FlatList, Image, StyleSheet, SafeAreaView, View} from 'react-native';
import {Jost300, Jost400, Jost500, Jost600} from '../components/StyledText';
import colors from '../constants/colors';
import GreenArrow from '../assets/arrow-up.svg';
import {FilterSortModalButton} from '../components/Buttons';

export default function WatchlistScreen({navigation, route}) {
  const {type} = route.params; // can be personal, popular or trending
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
      <FlatList
        data={watchlist}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={() => <View style={style.itemSeparator}></View>}
        renderItem={({item}) => {
          return (
            <View style={style.container}>
              <View style={{flexDirection: 'row'}}>
                <Image style={style.modalImage} source={{uri: item.modelUrl}} />
                <View style={style.textContainer}>
                  <Jost600 style={style.significantEdition}>
                    "{item.significantEdition}"
                  </Jost600>
                  <Jost600 style={style.collection}>{item.collection}</Jost600>
                  <Jost400 style={style.reference}>{item.reference}</Jost400>
                </View>
              </View>
              <View style={style.priceContainer}>
                <View style={style.priceTrendContainer}>
                  <Jost500 style={style.price}>
                    {new Intl.NumberFormat('de-DE', {
                      style: 'currency',
                      currency: item.currency,
                      maximumFractionDigits: 0,
                    }).format(item.marketPrice)}
                  </Jost500>
                  {item.raising ? (
                    <GreenArrow
                      style={{marginLeft: 2}}
                      width={14}
                      height={10}
                    />
                  ) : (
                    <GreenArrow
                      style={{marginLeft: 2}}
                      width={14}
                      height={10}
                    />
                  )}
                </View>
                <Jost300 style={style.marketPrice}>Market Price</Jost300>
              </View>
            </View>
          );
        }}
      />
      <FilterSortModalButton />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  itemSeparator: {height: 1, backgroundColor: colors.lightGrey},
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  modalImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {justifyContent: 'center'},
  significantEdition: {fontSize: 9, color: colors.grey58},
  collection: {fontSize: 18, color: colors.primary},
  reference: {fontSize: 12, color: colors.primary},
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.almostWhite,
    paddingHorizontal: 10,
    width: 110,
  },
  priceTrendContainer: {flexDirection: 'row', alignItems: 'center'},
  price: {fontSize: 18, color: colors.primary},
  marketPrice: {fontSize: 9, color: colors.grey58},
});
