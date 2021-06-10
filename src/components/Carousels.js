import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {width, height} from '../utils/tools';

export const FullWidthCarousel = ({data}) => {
  const renderItem = ({item, index}) => {
    return <Image style={{width: width}} source={item.source} />;
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
    />
  );
};
