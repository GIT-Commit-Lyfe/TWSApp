import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {upperCase} from 'lodash';
import colors from '../constants/colors';
import {formatCurrency, width} from '../utils/tools';
import {Jost300, Jost400, Jost500, Jost600} from './StyledText';
import {FilterSortModalButton} from './Buttons';

export default function ListingsModal({navigation, bottomSheetRef}) {
  const onPress = item => {
    bottomSheetRef.current.close();
    navigation.push('ListingDetail', {data: item});
  };

  const listings = [
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: '',
      reference: '126710BLRO',
      significantEdition: 'BATMAN',
      collection: 'GMT Master II',
      year: '2016',
      price: 13350,
      currency: 'EUR',
      condition: 'Very Good',
      accomodation: 'With Original Papers',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: 'F4',
      reference: '16610LV',
      significantEdition: 'KERMIT FLAT 4',
      collection: 'Submariner Date',
      year: '2004',
      price: 17900,
      currency: 'EUR',
      condition: 'Fair',
      accomodation: 'Full Set',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: 'F4',
      reference: '16610LV',
      significantEdition: 'KERMIT FLAT 4',
      collection: 'Submariner Date',
      year: '2004',
      price: 13350,
      currency: 'EUR',
      condition: 'Fair',
      accomodation: 'Full Set',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: 'F4',
      reference: '16610LV',
      significantEdition: 'KERMIT FLAT 4',
      collection: 'Submariner Date',
      year: '2004',
      price: 13350,
      currency: 'EUR',
      condition: 'Fair',
      accomodation: 'Full Set',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: 'F4',
      reference: '16610LV',
      significantEdition: 'KERMIT FLAT 4',
      collection: 'Submariner Date',
      year: '2004',
      price: 13350,
      currency: 'EUR',
      condition: 'Fair',
      accomodation: 'Full Set',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <FlatList
          style={styles.flatListStyle}
          contentContainerStyle={styles.flatListContainerStyle}
          numColumns={2}
          data={listings}
          keyExtractor={(_, index) => index}
          renderItem={({item, index}) => {
            const isFirst = index === 0;
            return (
              <TouchableOpacity
                onPress={() => onPress(item)}
                style={{
                  ...styles.cardStyle,
                  marginRight: index % 2 === 0 ? 10 : 0,
                }}>
                <View>
                  <Jost500 style={styles.itemCode}>
                    {`(${item.code})${item.reference}${item.SECode && '-'}${
                      item.SECode
                    }`}
                  </Jost500>
                  <Image
                    style={styles.imageStyle}
                    source={{uri: item.modelUrl}}
                  />
                  <Jost500 style={styles.mediumText}>{`${upperCase(
                    item.brand,
                  )} "${item.significantEdition}"`}</Jost500>
                  <Jost500
                    style={
                      styles.mediumText
                    }>{`${item.collection} (${item.year})`}</Jost500>
                  <Jost300
                    style={
                      styles.smallText
                    }>{`${item.condition} Condition`}</Jost300>
                  <Jost300
                    style={styles.smallText}>{`${item.accomodation}`}</Jost300>
                </View>
                <View>
                  <Jost600 style={styles.bigText}>{formatCurrency(item.price)}
                  </Jost600>
                  <Jost300 style={styles.tinyCopy}>
                    Incl. Chronobase Authentication
                  </Jost300>
                  <View style={styles.sellerInfo}>
                    <Jost600 style={styles.smallGreyText}>
                      {item.sellerType}
                    </Jost600>
                    <Jost300 style={styles.smallGreyText}>
                      {`${item.country}, ${item.city}`}
                    </Jost300>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => {
            const howToFollowListing = () => {
              console.log('How to follow listing?');
            };
            return (
              <View style={styles.listEmptyContainer}>
                <Jost400 style={styles.listEmptyText}>
                  It looks like you don't follow any listing. You can follow
                  your favorite listings to easily track and access them.
                </Jost400>
                <TouchableOpacity
                  onPress={howToFollowListing}
                  style={styles.listEmptyButton}>
                  <Jost500 style={styles.listEmptyButtonText}>
                    How to follow a listing?
                  </Jost500>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <FilterSortModalButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  flatListStyle: {
    paddingBottom: 30,
    paddingTop: 8,
    paddingHorizontal: 10,
  },
  flatListContainerStyle: {
    justifyContent: 'flex-end',
  },
  cardStyle: {
    padding: 2,
    width: width * 0.45,
    marginTop: 14,
    backgroundColor: colors.almostWhite,
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 9,
    color: colors.grey58,
  },
  mediumText: {
    fontSize: 12,
    color: colors.primary,
  },
  bigText: {
    fontSize: 18,
    marginTop: 5,
    height: 20,
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  itemCode: {fontSize: 9, color: colors.primary},
  tinyCopy: {
    fontSize: 6,
    color: colors.grey58,
  },
  sellerInfo: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  smallGreyText: {fontSize: 9, color: colors.grey58},
  listEmptyContainer: {width: width, paddingHorizontal: 10},
  listEmptyText: {color: colors.primary, fontSize: 14},
  listEmptyButton: {
    flexDirection: 'row',
    fontSize: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  listEmptyButtonText: {color: colors.primary, fontSize: 14},
});
