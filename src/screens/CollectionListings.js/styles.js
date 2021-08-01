import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  listingHeaderContainer: {
    marginHorizontal: figmaWidth(14),
    marginTop: figmaHeight(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {flexDirection: 'row'},
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listingHeaderText: {
    fontSize: 18,
    width: '70%',
  },
  filterText: {fontSize: 13, marginRight: 4},
  filterItemContainer: {
    marginTop: figmaHeight(20),
    marginHorizontal: figmaWidth(14),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lowestAskContainer: {
    marginHorizontal: figmaWidth(14),
    marginTop: figmaHeight(24),
  },
  lowestListingContainer: {
    marginVertical: figmaHeight(12),
  },
  listingBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainImageContainer: {
    flex: 1,
  },
  mainImage: {
    flex: 1,
    resizeMode: 'cover',
    marginBottom: 3,
  },
  secondaryImageContainer: {
    width: '32%',
  },
  secondaryImage: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  lowestAskTitle: {
    fontSize: 18,
  },
  leftContainer: {
    flex: 0.45,
  },
  rightContainer: {
    flex: 0.55,
    backgroundColor: colors.almostWhite,
    padding: 8,
  },
  listingTitle: {
    fontSize: 12,
  },
  description: {
    fontSize: 9,
    backgroundColor: 'white',
    lineHeight: 13,
    marginVertical: 8,
    color: colors.grey58,
  },
  readMoreText: {
    position: 'relative',
    top: 3,
    fontSize: 9,
    lineHeight: 13,
  },
  attributes: {
    fontSize: 9,
    lineHeight: 13,
    color: colors.grey58,
  },
  price: {
    fontSize: 18,
    textAlign: 'right',
  },
  chronoCopy: {
    fontSize: 6,
    textAlign: 'right',
    position: 'relative',
    bottom: 4,
    color: colors.grey58,
  },
  sellerType: {
    fontSize: 9,
    color: colors.grey58,
  },
  seller: {
    fontSize: 9,
    color: colors.grey58,
    textDecorationLine: 'underline',
  },
  country: {
    fontSize: 9,
    color: colors.grey58,
  },
  bottomRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  separator: {width: figmaWidth(12)},
});

export default styles;
