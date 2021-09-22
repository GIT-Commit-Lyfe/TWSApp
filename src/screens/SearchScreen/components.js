import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Jost300, Jost400, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CollectionItem, CollectionList} from '../../components/Lists';
import PopularList, {BrandItem} from '../PopularBrandsScreen/PopularList';

export const InitialList = ({title = '', data, onPress = () => {}}) => {
  return (
    <View style={styles.initialContainer}>
      <View style={styles.row}>
        <Jost600 style={styles.title}>{title}</Jost600>
      </View>
      {data.map((item, idx) => {
        return (
          <TouchableOpacity key={idx} onPress={onPress} style={styles.row}>
            <Jost400>{item}</Jost400>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const collections = [
  {
    id: 1,
    collection: 'GMT Master II',
    productionYearStart: '2005',
    productionYearEnd: '2021',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 13450,
    smallText: 'in Collections',
  },
  {
    id: 2,
    collection: 'GMT Master ',
    productionYearStart: '1954',
    productionYearEnd: '2007',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 10444,
    smallText: 'in Collections',
  },
  {
    id: 3,
    collection: 'GMT Master II',
    productionYearStart: '2005',
    productionYearEnd: '2021',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 13450,
    smallText: 'in Collections',
  },
  {
    id: 4,
    collection: 'GMT Master ',
    productionYearStart: '1954',
    productionYearEnd: '2007',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 10444,
    smallText: 'in Models',
  },
  {
    id: 5,
    collection: 'GMT Master II',
    productionYearStart: '2005',
    productionYearEnd: '2021',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 13450,
    smallText: 'in Models',
  },
  {
    id: 6,
    collection: 'GMT Master ',
    productionYearStart: '1954',
    productionYearEnd: '2007',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 10444,
    smallText: 'in Models',
  },
  {
    id: 7,
    collection: 'GMT Master II',
    productionYearStart: '2005',
    productionYearEnd: '2021',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 13450,
    smallText: 'in Models',
  },
  {
    id: 8,
    collection: 'GMT Master ',
    productionYearStart: '1954',
    productionYearEnd: '2007',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 10444,
    smallText: 'in Models',
  },
];

const brands = [
  {
    name: 'Rolex',
    media_url: 'https://via.placeholder.com/50',
    smallText: 'in Brands',
  },
];

export const MultiScopeResult = ({onPress, query, data}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const {label, amount} = item;
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.multiScopeRow}>
            <Jost300 style={styles.multiScopeText}>
              <Jost600>{query}</Jost600>
              {' in ' + label}
            </Jost300>
            <View style={styles.flewRow}>
              <Jost300 style={styles.rightText}>{amount + ' Results'}</Jost300>
              <MaterialIcons
                name="arrow-forward-ios"
                color={colors.primary}
                size={15}
              />
            </View>
          </TouchableOpacity>
        );
      })}
      <Jost600 style={styles.topResult}>{'Top Results'}</Jost600>
      <BrandItem
        brand={{
          name: 'Rolex',
          media_url: 'https://via.placeholder.com/50',
          smallText: 'in Brands',
        }}
        style={{
          paddingHorizontal: figmaWidth(20),
          borderBottomWidth: 1,
          borderBottomColor: colors.greyC5,
        }}
      />
      {collections.map((collection, idx) => {
        return (
          <CollectionItem
            key={idx}
            onPress={onPress}
            item={collection}
            containerStyle={styles.collection}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  container: {
    paddingBottom: figmaHeight(12),
  },
  initialContainer: {
    paddingBottom: figmaHeight(12),
    paddingHorizontal: figmaWidth(20),
  },
  row: {
    paddingVertical: figmaHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.greyC5,
  },
  flewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
  },
  multiScopeRow: {
    paddingVertical: figmaHeight(10),
    paddingHorizontal: figmaWidth(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.greyC5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  multiScopeText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.primary,
  },
  rightText: {
    fontSize: 11,
    lineHeight: 15.9,
    marginRight: figmaWidth(10),
  },
  topResult: {
    marginTop: figmaHeight(30),
    marginBottom: figmaHeight(16),
    paddingHorizontal: figmaWidth(20),
    fontSize: 18,
  },
  collection: {
    paddingHorizontal: figmaWidth(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.greyC5,
  },
});
