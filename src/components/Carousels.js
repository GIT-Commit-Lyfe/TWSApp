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
import {Jost400, Jost600} from '../components/StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';

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

export const PriceTrendCarousel = ({title}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
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
      <FlatList horizontal />
    </View>
  );
};
