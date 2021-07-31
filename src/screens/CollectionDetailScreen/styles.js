import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    marginHorizontal: figmaWidth(14),
    paddingVertical: figmaHeight(16),
    marginBottom: figmaHeight(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.greyCD,
  },
  collectionTitle: {fontSize: 24, lineHeight: 36},
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: figmaWidth(14),
    justifyContent: 'space-between',
  },
  separator: {width: figmaWidth(12)},
  listingHeaderContainer: {
    marginHorizontal: figmaWidth(14),
    marginTop: figmaHeight(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listingHeaderText: {
    fontSize: 18,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterText: {fontSize: 13, marginRight: 4},
  filterItemContainer: {
    marginTop: figmaHeight(20),
    marginHorizontal: figmaWidth(14),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default styles;
