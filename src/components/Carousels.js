import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {width, height} from '../utils/tools';
import {Jost300, Jost400, Jost600} from '../components/StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import GreenArrow from '../assets/arrow-up.svg';

export const FullWidthCarousel = ({data}) => {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 83,
            left: 3,
            backgroundColor: 'white',
            width: 116,
            paddingHorizontal: 10,
            paddingVertical: 5,
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Jost400 style={{color: 'black', fontSize: 14}}>
            Discover Offers
          </Jost400>
        </TouchableOpacity>
        <Image source={item.source} style={{width: width}} />
      </View>
    );
  };
  return (
    <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      bounces={false}
      keyExtractor={(item, index) => index}
    />
  );
};

export const PriceTrendCarousel = ({title, data}) => {
  const {
    container,
    titleContainer,
    titleText,
    seeAllContainer,
    seeAllText,
    cardStyle,
    smallText,
    mediumText,
    bigText,
    imageStyle,
    priceContainer,
  } = PriceTrendCarouselStyle;
  return (
    <View style={container}>
      <View style={titleContainer}>
        <Jost600 style={titleText}>{title}</Jost600>
        <TouchableOpacity style={seeAllContainer}>
          <Jost400 style={seeAllText}>See All</Jost400>
          <MaterialIcons
            name="chevron-right"
            size={40}
            color={colors.primary}></MaterialIcons>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{paddingBottom: 30, paddingTop: 8}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          return (
            <View style={{...cardStyle, marginLeft: isFirst ? 10 : 8}}>
              <View style={{zIndex: 1}}>
                <Jost400 style={smallText}>"{item.significantEdition}"</Jost400>
                <Jost600 style={mediumText}>{item.collection}</Jost600>
                <Jost400 style={mediumText}>{item.reference}</Jost400>
              </View>
              <Image style={imageStyle} source={{uri: item.modelUrl}}></Image>
              <View>
                <View style={priceContainer}>
                  <Jost600 style={bigText}>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: item.currency,
                      maximumFractionDigits: 0,
                    }).format(item.marketPrice)}
                  </Jost600>
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
                <Jost300 style={smallText}>Market Price</Jost300>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const PriceTrendCarouselStyle = StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  titleText: {fontSize: 24, color: colors.primary},
  seeAllContainer: {flexDirection: 'row', alignItems: 'center'},
  seeAllText: {fontSize: 14, color: colors.primary},
  cardStyle: {
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {height: 10, width: 0},
    padding: 6,
    width: 130,
    height: 180,
    backgroundColor: colors.almostWhite,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallText: {fontSize: 9, textAlign: 'center'},
  mediumText: {fontSize: 12, textAlign: 'center'},
  bigText: {
    fontSize: 18,
    textAlign: 'center',
  },
  imageStyle: {width: 120, height: 120, position: 'absolute', top: 30},
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
