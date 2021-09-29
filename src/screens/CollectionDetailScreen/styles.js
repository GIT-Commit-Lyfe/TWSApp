import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  flex: {flex: 1},
  header: {
    marginHorizontal: figmaWidth(14),
    marginBottom: figmaHeight(16),
  },
  collectionTitle: {
    fontSize: 24,
    lineHeight: 36,
    marginHorizontal: figmaWidth(14),
    marginVertical: figmaHeight(16),
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: figmaWidth(14),
    justifyContent: 'space-between',
  },
  separator: {width: figmaWidth(12)},
  line: {
    height: 0.5,
    backgroundColor: colors.greyC5,
    marginHorizontal: figmaWidth(14),
    marginTop: figmaHeight(20),
  },
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
