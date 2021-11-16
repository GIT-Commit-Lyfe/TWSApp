import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import colors from '../constants/colors';
import {figmaWidth, formatCurrency} from '../utils/tools';
import {Jost300, Jost400, Jost500, Jost600} from './StyledText';
import GreenArrow from '../assets/arrow-up.svg';
import TransparentCard from './TransparentCard';

export const SimpleList = ({title, items}) => {
  return (
    <View>
      <Jost600 style={styles.title}>{title}</Jost600>
      {items.map((item, index) => {
        const isFirst = index === 0;
        return (
          <View
            key={index}
            style={{...styles.listContainer, borderTopWidth: isFirst ? 1 : 0}}>
            <Jost400 style={styles.label}>{item.label}</Jost400>
            <Jost600 style={styles.value}>{item.value}</Jost600>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: colors.primary,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  listContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.greyCD,
  },
  label: {
    color: colors.grey58,
    fontSize: 14,
    textAlign: 'right',
    paddingHorizontal: 20,
  },
  value: {
    color: colors.grey58,
    fontSize: 14,
    textAlign: 'right',
    paddingHorizontal: 20,
  },
});

export const WatchList = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index}
      ItemSeparatorComponent={() => (
        <View style={WatchListStyle.itemSeparator}></View>
      )}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={WatchListStyle.container}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={WatchListStyle.modalImage}
                source={{uri: item.modelUrl}}
              />
              <View style={WatchListStyle.textContainer}>
                <Jost600 style={WatchListStyle.significantEdition}>
                  "{item.significantEdition}"
                </Jost600>
                <Jost600 style={WatchListStyle.collection}>
                  {item.collection}
                </Jost600>
                <Jost400 style={WatchListStyle.reference}>
                  {item.reference}
                </Jost400>
              </View>
            </View>
            <View style={WatchListStyle.priceContainer}>
              <View style={WatchListStyle.priceTrendContainer}>
                <Jost500 style={WatchListStyle.price}>
                  {formatCurrency(item.marketPrice)}
                </Jost500>
                {item.raising ? (
                  <GreenArrow style={{marginLeft: 2}} width={14} height={10} />
                ) : (
                  <GreenArrow style={{marginLeft: 2}} width={14} height={10} />
                )}
              </View>
              <Jost300 style={WatchListStyle.marketPrice}>Market Price</Jost300>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const WatchListStyle = StyleSheet.create({
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

export const CollectionList = ({
  data,
  inSearch,
  onPress = () => {},
  containerStyle = {},
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index}
      ItemSeparatorComponent={() => (
        <View style={CollectionListStyle.itemSeparator}></View>
      )}
      renderItem={({item}) => {
        return (
          <CollectionItem
            onPress={onPress}
            item={item}
            containerStyle={containerStyle}
          />
        );
      }}
    />
  );
};

export const CollectionItem = ({onPress, item, containerStyle}) => {
  const {
    collection,
    productionYearStart,
    productionYearEnd,
    modelUrl,
    currency,
    lowestAsk,
    smallText,
  } = item;

  const currentYear = new Date().getFullYear();
  const isDiscontinued = productionYearEnd < currentYear;

  const smallPrint = smallText
    ? smallText
    : isDiscontinued
    ? 'Discontinued'
    : '';

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={{...CollectionListStyle.container, ...containerStyle}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={CollectionListStyle.modalImage}
          source={{uri: modelUrl}}
        />
        <View style={CollectionListStyle.textContainer}>
          {Boolean(smallPrint) && (
            <Jost600 style={CollectionListStyle.significantEdition}>
              {smallPrint}
            </Jost600>
          )}
          <Jost600 style={CollectionListStyle.collection}>{collection}</Jost600>
          <Jost400 style={CollectionListStyle.reference}>
            {`${productionYearStart} - ${
              isDiscontinued ? productionYearEnd : 'Current Model'
            }`}
          </Jost400>
        </View>
      </View>
      <View style={CollectionListStyle.priceContainer}>
        <View style={CollectionListStyle.priceTrendContainer}>
          <Jost500 style={CollectionListStyle.price}>
            {formatCurrency(lowestAsk)}
          </Jost500>
        </View>
        <Jost300 style={CollectionListStyle.marketPrice}>Lowest Ask</Jost300>
      </View>
    </TouchableOpacity>
  );
};

const CollectionListStyle = StyleSheet.create({
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

export const TwoRowList = ({ListHeaderComponent, data}) => {
  const navigation = useNavigation();

  const itemOnPress = item => {
    navigation.navigate('ListingDetail', {data: item});
  };

  return (
    <FlatList
      contentContainerStyle={TwoRowListStyles.container}
      ListHeaderComponent={ListHeaderComponent}
      data={data}
      keyExtractor={(_, index) => index}
      numColumns={2}
      renderItem={({item, index}) => {
        return (
          <TransparentCard
            key={index}
            content={item}
            index={index}
            onPress={() => itemOnPress(item)}
          />
        );
      }}
    />
  );
};

const TwoRowListStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'space-between',
  },
});
