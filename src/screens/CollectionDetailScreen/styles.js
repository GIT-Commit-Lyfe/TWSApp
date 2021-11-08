import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  flex: {flex: 1},
  header: {
    marginVertical: figmaHeight(16),
    borderTopWidth: 1,
  },
  headerTitleContainer: {
    marginHorizontal: figmaWidth(14),
    minWidth: figmaWidth(150),
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    paddingVertical: figmaHeight(4),
  },
  headerTitle: {
    color: colors.greyE6,
    fontSize: 14,
    lineHeight: 20.23,
    textAlign: 'center',
  },
  description: {marginHorizontal: figmaWidth(14), marginTop: figmaHeight(10)},
  collectionTitle: {
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    marginHorizontal: figmaWidth(14),
    marginTop: figmaHeight(16),
  },
  collectionSubtitle: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    marginHorizontal: figmaWidth(14),
    color: colors.grey58,
  },
  buttonContainer: {
    marginHorizontal: figmaWidth(14),
    marginBottom: figmaHeight(24),
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
