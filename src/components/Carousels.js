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
import {Jost200, Jost400, Jost600} from '../components/StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
// import GreenUpArrow from '../assets/green-up-arrow.svg';

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
      keyExtractor={(item, index) => index}
    />
  );
};

export const PriceTrendCarousel = ({title, data}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Jost600 style={{fontSize: 24, color: colors.primary}}>{title}</Jost600>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Jost400 style={{fontSize: 14, color: colors.primary}}>
            See All
          </Jost400>
          <MaterialIcons
            name="chevron-right"
            size={40}
            color={colors.primary}></MaterialIcons>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{paddingBottom: 30, paddingTop: 8}}
        horizontal
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => {
          console.log(index);
          const isFirst = index === 0;
          return (
            <View
              style={{
                borderRadius: 10,
                elevation: 5,
                shadowOpacity: 0.25,
                shadowRadius: 4,
                shadowOffset: {height: 10, width: 0},
                padding: 6,
                marginLeft: isFirst ? 10 : 8,
                width: 130,
                height: 180,
                backgroundColor: colors.almostWhite,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Jost400 style={{fontSize: 9}}>
                  "{item.significantEdition}"
                </Jost400>
                <Jost600 style={{fontSize: 12}}>{item.collection}</Jost600>
                <Jost400 style={{fontSize: 12}}>{item.reference}</Jost400>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Jost600
                    style={{
                      fontSize: 18,
                    }}>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: item.currency,
                      maximumFractionDigits: 0,
                    }).format(item.marketPrice)}
                  </Jost600>
                </View>
                {/* <GreenUpArrow /> */}
                <Jost200 style={{fontSize: 9}}>Market Price</Jost200>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
